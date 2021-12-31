const gulp = require('gulp')
//const util = require('gulp-util')
const sequence = require('gulp4-run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default',()=> {
  sequence('deps','app','debug')
})