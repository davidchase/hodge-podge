'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
    return gulp.src('./clist/dist/js/*.js')
        .pipe(uglify())
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest('./client/dist/js'));
});