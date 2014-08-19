'use strict';

var gulp = require('gulp');
var jsdoc = require("gulp-jsdoc");

gulp.task('jsdocs', function () {
    return gulp.src('./client/src/**/*.js')
        .pipe(jsdoc('./client/dist/js/docs'))
        .on('error', function (err) {
            console.log(err);
        });
});