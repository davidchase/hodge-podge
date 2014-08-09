'use strict';

var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function() {
    return gulp.src('./client/src/**/*.scss')
        .pipe(compass({
            css: './client/dist/css',
            scss: './client/src/scss'
        }))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest('./public/css'));
});