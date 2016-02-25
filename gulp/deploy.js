'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task ('deploy', ['build'], function() {
  return gulp
  .src(path.join(conf.paths.dist, '/**/*'))
  .pipe($.ghPagesCname({
    branch: 'master',
    cname: 'breno.io'
  }));
});
