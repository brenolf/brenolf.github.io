'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('img', function() {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*.{png,jpg,jpeg,gif}')
  ])
    .pipe(fileFilter)
    .pipe($.imagemin({
      progressive: true,
      optimizationLevel: 4,
      interlace: true
    }))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});
