'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('livereload', function () {
    var server = livereload();
    return gulp.watch(['both/**/*', 'client/**/*', 'server/**/*'])
        .on('change', function(file) {
            server.changed(file.path);
        })
        .on('error', function (err) {
            console.log(err);
        });
});