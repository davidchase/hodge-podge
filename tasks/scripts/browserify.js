'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ugilfy = require('gulp-uglify');
var index = [
        './client/src/basket'
        ];
var libs = require('./vendor').libs;
var html = require('hbsfy');

gulp.task('browserify', function() {
    var bundleStream = browserify({
        entries: index
    });
    bundleStream
    // .external(libs)
    .transform(html)
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(ugilfy())
        .pipe(gulp.dest('./client/dist/js'))
        .on('error', function(err) {
            console.log(err);
        });
});