'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var libs = ['angular'];

gulp.task('vendor', function() {
    // create external libraries
    var bundleStream = browserify();
    bundleStream
        .require(libs)
        .bundle()
        .pipe(source('vendor-bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
    .on('error', function(err) {
        console.log(err);
    })
        .pipe(gulp.dest('./client/dist/js'));
});

module.exports.libs = libs;