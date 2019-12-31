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

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  })
})

gulp.task('watch:less', () => {
  return gulp.watch(
    ['./src/**/*.less'],
    {
      delay: 200,
    },
    gulp.task('less'),
  )
})

gulp.task('watch:html', () => {
  return gulp
    .watch(['./*.html'], {
      delay: 200,
    })
    .on('change', browserSync.reload)
})

gulp.task(
  'default',
  gulp.series('less', gulp.parallel('watch:less', 'watch:html', 'serve')),
)
