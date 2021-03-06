module.exports = (gulp, config) => () => {
  const path = require('path');

  return gulp.src([path.join(config.srcDir, '/**/*.json'), '!src/tsconfig.json'])
      .pipe(gulp.dest(config.distDir));
};
