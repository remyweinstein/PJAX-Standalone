/**
 * pjax-standalone build script
 */

'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    rimraf = require('rimraf'),
    rename = require("gulp-rename");

     
var path = {
  build: {
    js: './dist'
  },
  
  src: {
    js: './src/pjax-standalone.js'
  },
  
  clean: './dist'
};

gulp.task('js:build', function () {
  gulp.src(path.src.js)
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest(path.build.js));
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('build', [
  'js:build'
]);

gulp.task('watch', function(){
  watch([path.src.js], function() {
    gulp.start('js:build');
  });
});

gulp.task('default', ['clean', 'build', 'watch']);