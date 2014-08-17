'use strict';
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');

gulp.task('lint', function() {
    return gulp.src([
            'gulpfile.js',
            'tasks/**/*.js',
            'client/src/**/*.js',
            'test/**/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});