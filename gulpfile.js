var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cp          = require('child_process');

var sassMain = '_sass/main.scss';
var sassDir = '_sass/**/*.scss';

var messages = {
  jekyllDev: 'Running: $ jekyll build for dev',
  jekyllProd: 'Running: $ jekyll build for prod'
};

gulp.task('sass-dev', function() {
  gulp.src(sassMain)
    .pipe(sass({
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 2 versions'], { cascade: true }))
    .pipe(gulp.dest('_site/assets'))
    .pipe(browserSync.reload({stream:true}))
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

gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['sass-dev', 'jekyll-dev'], function() {
  browserSync.init({
    server: "_site",
    port: 1234
  });
});

gulp.task('watch', function() {
  gulp.watch(sassDir, ['sass-dev', 'jekyll-rebuild']);
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '_includes/*.html', '_drafts/*', '**/*.html'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
