var gulp = require('gulp');
gulp.task('build', ['compass', 'vendor', 'browserify', 'uglify', 'lint']);