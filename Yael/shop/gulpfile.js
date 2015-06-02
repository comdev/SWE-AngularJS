/**
 * Created by yaelwidmann on 20.05.15.
 */
// include gulp

var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var ts = require('gulp-typescript');
var typescript = require('gulp-tsc');

var webserver = require('gulp-webserver');

//Webserver starten
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(webserver({
      open: true
    }));
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
    imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});
// include plug-ins
var minifyHTML = require('gulp-minify-html');

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './src/*.html',
    htmlDst = './build';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});
// include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

// JS concat, strip debugging and minify - lib.js to appear at the top of the production file
gulp.task('scripts', function() {
  gulp.src(['./src/scripts/lib.js','./src/scripts/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'))
    .pipe(ts({
    sortOutput: true
    // ...
  }));
});
// include plug-ins
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// CSS concat, auto-prefix and minify- string or array indicating the level of browser support
gulp.task('styles', function() {
  gulp.src(['./src/styles/*.css'])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
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


//default gulp task -  run any number of dependent sub-tasks - only if changes are made
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles', 'typescript', 'webserver'], function() {
  // watch for HTML changes
  gulp.watch('./src/*.html', function() {
    gulp.run('htmlpage');
  });

  // watch for JS changes
  gulp.watch('./src/scripts/*.js', function() {
    gulp.run('jshint', 'scripts');
  });

  // watch for CSS changes
  gulp.watch('./src/styles/*.css', function() {
    gulp.run('styles');
  });
});