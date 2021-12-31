const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const app = require('./app')

gulp.task('debug',gulp.series(watchFiles))
gulp.task('server',gulp.series(initService))

function watchFiles() {
  gulp.watch('app/**/*.html', gulp.series(app.appHtml))
  gulp.watch('app/**/*.css', gulp.series(app.appCss))
  gulp.watch('app/**/*.js', gulp.series(app.appJs))
  gulp.watch('assets/**/*.*', gulp.series(app.appAssets))
  initServiceDebug()
}

function initServiceDebug() {
  return gulp.src('public').pipe(webserver({
    livereload: true,
    port: 3000,
    open: false
  }))
}

function initService() {
  return gulp.src('public').pipe(webserver({
    livereload: false,
    port: 3000,
    open: false
  }))
}
