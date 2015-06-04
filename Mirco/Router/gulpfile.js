'use-strict';

var gulp = require('gulp')
var typescript = require('gulp-tsc');
var webserver = require('gulp-webserver');

var jshint = require('gulp-jshint');

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

 
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

// JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));

});

//changed task (Only pass through changed files)
gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
      .pipe(changed(imgDst))
      .pipe(imagemin())
      .pipe(gulp.dest(imgDst));
});

gulp.task('default', ['typescript','webserver']);
