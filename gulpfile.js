var gulp        = require('gulp'),
    less        = require('gulp-less'),
    minifyCSS   = require('gulp-minify-css'),
    prefixer    = require('gulp-autoprefixer'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify');

gulp.task ('default', ['styles', 'scripts']);
gulp.task ('all', ['default', 'cv', 'audience']);

gulp.task ('scripts', function () {
    return gulp
    .src('./js/breno.io.js')
    .pipe(uglify())
    .pipe(rename('breno.io.min.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task ('styles', function () {
    return gulp
    .src('./css/**/*.less')
    .pipe(less())
    .pipe(prefixer())
    .pipe(minifyCSS())
    .pipe(concat('css.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task ('cv', function () {
    return gulp
    .src('./cv/css/*.less')
    .pipe(less())
    .pipe(prefixer())
    .pipe(minifyCSS())
    .pipe(concat('css.css'))
    .pipe(gulp.dest('./cv/css'));
});

gulp.task ('audience', function () {
    return gulp
    .src('./audience/less/*.less')
    .pipe(less())
    .pipe(prefixer())
    .pipe(minifyCSS())
    .pipe(concat('css.css'))
    .pipe(gulp.dest('./audience/assets/css'));
});
