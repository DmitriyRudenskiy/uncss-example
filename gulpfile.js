var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var cssbeautify = require('gulp-cssbeautify');
var prettyHtml = require('gulp-pretty-html');
var html5Lint = require('gulp-html5-lint');
var htmlmin = require('gulp-htmlmin');
var ghtmlSrc = require('gulp-html-src');
var sourceUpdate = require('gulp-source-link-update');
var linkToImport = require('gulp-link-to-import');

gulp.task('pages', function () {
    return gulp.src('./src/*.html')
        .pipe(html5Lint())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(sourceUpdate())
        .pipe(prettyHtml())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
    return gulp.src('./src/*.html')
        .pipe(uncss({
            html: ['./src/index.html']
        }))
        .pipe(nano())
        .pipe(concat('f.css'))
        .pipe(cssbeautify())
        .pipe(gulp.dest('./dist/css'));
});