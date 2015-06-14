'use-strict';

var gulp = require('gulp')
var typescript = require('gulp-tsc');
var webserver = require('gulp-webserver');

/*
var tslint = require('gulp-tslint');
var cache = require('gulp-cached');
*/

var imagemin = require('gulp-imagemin');

 
gulp.task('typescript', function(){
  gulp.src(['src/**/*.ts'])
    .pipe(typescript({
		target:'ES5',
    outDir: 'build',
    emitError:'true',
    declaration: 'true',
    sourcemap: false
	}))
    .pipe(gulp.dest('src/'))
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      open: true
    }));
});

// Tslint, a tool that helps to detect errors and potential
// problems in your Typscript code.
//gulp.task('tslint', function(){
//  gulp.src('./src/**/*.ts')
 /*   .pipe(cache('tslint'))
    .pipe(tslint())
    .pipe(tslint.report('verbose', {
      emitError: false
    }));
});*/

//changed task (Only pass through changed files)
gulp.task('imagemin', function() {
    return gulp.src('./src/img/*.jpg')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('src/img_published'));
});

gulp.task('default', ['typescript','imagemin','webserver']);
