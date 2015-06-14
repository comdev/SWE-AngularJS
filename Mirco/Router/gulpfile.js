'use-strict';

var gulp = require('gulp')
var typescript = require('gulp-tsc');
var webserver = require('gulp-webserver');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

 
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

//changed task (Only pass through changed files)
gulp.task('imagemin', function() {
    return gulp.src('./src/img/*.jpg')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('src/img_published'));
});

gulp.task('minify-css', function() {
    return gulp.src('src/style/style.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/style_published'));
});

gulp.task('compress', function(){
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['typescript','minify-css','imagemin','compress','webserver']);
