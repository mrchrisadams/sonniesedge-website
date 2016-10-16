var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cp          = require('child_process');
var ghPages = require('gulp-gh-pages');

var gulp = require('gulp');
var babel = require('gulp-babel');

var sassMain = '_sass/main.scss';
var sassDir = '_sass/**/*.scss';

var messages = {
  jekyllDev: 'Running: $ jekyll build for dev',
  jekyllProd: 'Running: $ jekyll build for prod'
};

gulp.task('sass-dev', function() {
  return gulp.src(sassMain)
    .pipe(sass({
      onError: browserSync.notify,
      includePaths: ['node_modules/csslibrary/assets']
    }))
    .pipe(prefix(['last 2 versions'], { cascade: true }))
    .pipe(gulp.dest('_site/assets'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets'));
});

gulp.task('sass-prod', function () {
  return gulp.src(sassMain)
    .pipe(sass({
      onError: browserSync.notify,
      includePaths: ['node_modules/csslibrary/assets']
    }))
    .pipe(prefix(['last 2 versions'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets'))
    .pipe(gulp.dest('assets'));
});

gulp.task('jekyll-dev', function (done) {
  browserSync.notify(messages.jekyllDev);
  return cp.spawn('jekyll', ['build', '--drafts', '--config', '_config.yml'], {stdio: 'inherit'})
 .on('close', done);
});

gulp.task('jekyll-prod', function (done) {
  browserSync.notify(messages.jekyllProd);
  return cp.spawn('jekyll', ['build', '--config', '_config.yml'], {stdio: 'inherit'})
  .on('close', done);
});

gulp.task('js', function() {
  return gulp.src('rss.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['sass-dev', 'jekyll-dev'], function() {
  browserSync.init({
    server: {
      baseDir: "_site",
      serveStaticOptions: {
        extensions: ['html']
      },
      port: 1234
    }

  });
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('_site/**/*')
    .pipe(ghPages({
      remoteUrl: 'git@github.com:SonniesEdge/sonniesedge.github.io.git',
      branch: 'master'
    }));
});

gulp.task('watch', function() {
  gulp.watch(sassDir, ['sass-dev', 'jekyll-rebuild']);
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '_includes/*.html', '_drafts/*', '**/*.html'], ['jekyll-rebuild']);
  gulp.watch('rss.js', ['js', 'jekyll-rebuild']);

});

gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['js', 'sass-prod', 'jekyll-prod']);
