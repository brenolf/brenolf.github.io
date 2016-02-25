'use strict';

var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task ('deploy', ['build'], function() {
  return gulp
  .src(conf.paths.dist)
  .pipe($.ghPagesCname({
    branch: 'master',
    cname: 'breno.io'
  }));
});
