var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    minifyCSS   = require('gulp-minify-css'),
    prefixer    = require('gulp-autoprefixer'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    img         = require('gulp-imagemin'),
    uglify      = require('gulp-uglify'),
    ghPages     = require('gulp-gh-pages-cname'),
    copy        = require('gulp-copy'),
    htmlmin     = require('gulp-html-minify'),
    del         = require('del');

var assets = './build/assets';

gulp.task ('default', ['styles', 'scripts', 'img', 'copy-pdf', 'html']);

gulp.task ('scripts', ['vendor-scripts'], function () {
  return gulp
  .src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest(assets + '/js'));
});

gulp.task ('vendor-scripts', function () {
  return gulp
  .src('./js/vendor/*')
  .pipe(gulp.dest(assets + '/js/vendor'));
});

gulp.task ('vendor-styles', function () {
  return gulp
  .src('./style/vendor/*')
  .pipe(gulp.dest(assets + '/css/vendor'));
});

gulp.task ('styles', ['vendor-styles', 'copy-fonts'], function () {
  return gulp
  .src('./style/*')
  .pipe(sass())
  .pipe(prefixer())
  .pipe(minifyCSS())
  .pipe(gulp.dest(assets + '/css'));
});

gulp.task ('html', function () {
  return gulp
  .src('./html/**/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('./build'));
});

gulp.task ('img', function() {
  return gulp
  .src('./img/*')
  .pipe(img())
  .pipe(gulp.dest(assets + '/img'));
});

gulp.task ('copy-pdf', function () {
  return gulp
  .src('./pdf/*')
  .pipe(gulp.dest(assets + '/pdf'));
});

gulp.task ('copy-fonts', function () {
  return gulp
  .src('./font/*')
  .pipe(gulp.dest(assets + '/font'));
});

gulp.task ('clean', function () {
  del(['./build', './*.publish']);
});

gulp.task ('deploy', ['default'], function() {
  return gulp
  .src('./build/**/*')
  .pipe(ghPages({
    branch: 'master',
    cname: 'breno.io'
  }));
});

gulp.task ('watch', ['default'], function () {
    gulp.watch('./js/**/*.js', ['scripts']);
    gulp.watch('./style/**/*', ['styles']);
    gulp.watch('./html/**/*', ['html']);
});
