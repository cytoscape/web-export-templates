//
// Build files for Export to HTML5 function (Cytoscape 3.2.0 and later) 
//
// Simply copy all files from child projects and create new zipped archive.
//

'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');
var clean = require('gulp-clean');

gulp.task('default', ['clean'], function() {
	gulp.start('zip');
});

gulp.task('copy-simple', function () {
    return gulp.src('cyjs-export-simple/dist/**/*')
        .pipe(gulp.dest('dist/web/simple'));
});

gulp.task('copy-full', function () {
    return gulp.src('cyjs-full-export/dist/**/*')
        .pipe(gulp.dest('dist/web/full'));
});

gulp.task('zip', ['copy-simple', 'copy-full'], function() {
	return gulp.src('dist/**/*')
		.pipe(zip('web.zip'))
        .pipe(gulp.dest('dist'));
});


gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe(clean());
});