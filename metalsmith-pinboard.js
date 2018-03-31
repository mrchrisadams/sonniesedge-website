module.exports = plugin;

function plugin(options){
    options = options || {};
    console.log('HELLO');

    return function(files, metalsmith, done){
        // console.log(files);
        setImmediate(done);
        files['posts/test.md'] = {
            'title': 'this is a test title',
            'content': 'test content'
        }

        Object.keys(files).forEach(function(file){
            var data = files[file];
            console.log(data['title']);
        });

        console.log('EXITED');
    }
}