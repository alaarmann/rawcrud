var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var browserify = require('gulp-browserify');
var rimraf = require('gulp-rimraf');

gulp.task('lint', function() {
  return gulp.src(['src/js/**/*.js', 'spec/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', ['lint'], function() {
  return gulp.src('spec/test.js')
    .pipe(jasmine({ verbose: true }));
});

gulp.task('clean', function() {
  return gulp.src('dist/**/*', { read: false })
  .pipe(rimraf());
});


gulp.task('build-js', ['check', 'clean'], function() {
  return gulp.src('src/js/main.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy-html', ['check', 'clean'], function() {
  return gulp.src('src/html/**/*.html', {base: 'src/html'})
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-css', ['check', 'clean'], function() {
  return gulp.src('src/css/**/*.css', {base: 'src'})
    .pipe(gulp.dest('dist'));
});

gulp.task('check', ['lint', 'test']);

gulp.task('build', ['check', 'clean', 'build-js', 'copy-html', 'copy-css']);

gulp.task('default', ['check', 'build']);

