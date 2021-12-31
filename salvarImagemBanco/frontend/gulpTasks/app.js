const gulp = require('gulp')
const babel = require('gulp-babel')
//const uglify = require('gulp-uglify')
const terser = require('gulp-terser')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

gulp.task('app', gulp.series(appHtml,appCss,appJs,appAssets))

function appHtml() {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true}))
    .pipe(gulp.dest('public'))
}

function appCss() {
  return gulp.src('app/**/*.css')
    .pipe(uglifycss({ uglyComments: true}))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
}

function appJs() {
  return gulp.src('app/**/*.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(terser())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'))
}

function appAssets() {
  return gulp.src('assets/**/*.*')
    .pipe(gulp.dest('public/assets'))
}

module.exports = {appHtml,appCss,appJs,appAssets}
