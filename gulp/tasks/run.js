const gulp = require('gulp');

function run(done) {
  process.on('unhandledRejection', r => console.log(r));
  require('../../dist/index');
}

gulp.task('run', gulp.series('clean', 'build', run));
