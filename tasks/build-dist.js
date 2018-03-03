module.exports = (gulp, config) => () => {
  const path = require('path');
  const replace = require('gulp-replace');
  const Builder = require('jspm').Builder;
  const builder = new Builder();
  const packageJson = require(path.join(config.projectDir, 'package.json'));
  const appName = packageJson.name;
  const version = packageJson.version;
  const fileName = appName.concat(version);
  const replaceScriptRegex = new RegExp('(<script src="scripts\/)(.*)(?=.min.js"><\/script>)', 'g');

  return beginBuild()
    .then(buildSFX)
    .then(changeIndexJsVersion)
    .catch((err) => {
      console.log('\n\tBuild Failed\n', err);
      process.exit(1);
    });

  function beginBuild() {
    builder.reset();
    return builder.loadConfig(path.join(config.projectDir, packageJson.jspm.configFile));
  }

  function buildSFX() {
    const distFileName = `${fileName}.min.js`;
    const outFile = path.join(config.scriptsDir, distFileName);
    const moduleName = config.moduleName;
    const buildConfig = {
      format: 'global',
      minify: false,
      sourceMaps: true
    };
    return builder.buildStatic(moduleName, outFile, buildConfig);
  }

  function changeIndexJsVersion() {
    return gulp.src(path.join(config.distDir, 'index.html'))
        .pipe(replace(replaceScriptRegex, '$1' + fileName))
        .pipe(gulp.dest(config.distDir));
  }
}
