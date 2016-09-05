const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const babelrc = JSON.parse(
  require('fs').readFileSync(__dirname + '/.babelrc', 'utf8')
);

gulp.task('default', function () {
  return browserify('./source/app.jsx')
           .transform(['babelify', babelrc])
           .bundle()
           .pipe(source('snapterest.js'))
           .pipe(gulp.dest('./build/'));
});
