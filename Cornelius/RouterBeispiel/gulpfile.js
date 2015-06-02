'use strict';

var gulp = require('gulp');
var typescript = require('gulp-tsc');
var webserver = require('gulp-webserver')

//Webserver starten
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(webserver({
      open: false,
    }));
});

gulp.task('typescript', function(){
  gulp.src(['src/**/*.ts'])
		.pipe(typescript({
		  target: 'ES5',
		  outDir: 'build',
		  emitError: true,
		  sourcemap: false
	  }))
	.pipe(gulp.dest("."));
});

gulp.task('default', ['typescript', 'webserver'], function() {
	// watch for TS changes
  gulp.watch('*.ts', function() {
    //gulp.run('typescript');
  });
  
});