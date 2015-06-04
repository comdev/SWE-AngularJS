'use-strict';

var gulp = require('gulp')
var typescript = require('gulp-tsc');
var webserver = require('gulp-webserver');
 
gulp.task('typescript', function(){
  gulp.src(['src/**/*.ts'])
    .pipe(typescript({
		target:'ES5',
    outDir: 'build',
    emitError:'true',
    sourcemap: false
	}))
    .pipe(gulp.dest('src/'))
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      open: false
    }));
});

gulp.task('default', ['typescript','webserver']);