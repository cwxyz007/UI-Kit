const gulp = require('gulp')
const less = require('gulp-less')
const browserSync = require('browser-sync').create()

gulp.task('less', () => {
  return gulp
    .src('./src/index.less')
    .pipe(less())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  })
})

gulp.task('watch', () => {
  return gulp.watch(
    './src/**/*.less',
    {
      delay: '200',
    },
    gulp.task('less'),
  )
})

gulp.task('default', gulp.series('less', gulp.parallel('watch', 'server')))
