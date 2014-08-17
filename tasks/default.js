'use strict';

var gulp = require('gulp');

gulp.task(
    'default',
    ['compass', 'browserify', 'vendor', 'nodemon', 'livereload'],
    function () {
        // execute watchers
        gulp.watch(['client/src/scss/**/*.scss'], ['compass']);
        gulp.watch(['client/src/**/*.js', 'both/**/*.hbs'], ['browserify']);
    }
);