'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        options: '--watch server --watch both --watch tasks'
    });
});