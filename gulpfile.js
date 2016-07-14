'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    util = require('util');

function getFile() {
    var fileOutput = '/**\n' +
        ' * NewFile.js\n' +
        ' * @depends {Class.js}\n' +
        ' */\n' +
        '(function() {\n' +
        '    \'use strict\';\n' +
        '    window.ohNoNotGlobal = ' + util.inspect({
            spider: 'man',
            cat: 'woman'
        }) + ';' +
        '\n}());\n';

    return plugins.file('src/js/NewFile.js', fileOutput);
}

gulp.task('js', function() {

    return gulp.src('src/js/**/*.js')
        .pipe(getFile())
        .pipe(plugins.resolveDependencies({
            pattern: /\* @depends {[\s-]*(.*\.js)}/g
        }))
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest('build'));
});
