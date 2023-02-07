const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const gulpif = require('gulp-if');
const path = require('../config/path');
const app = require('../config/app');

module.exports = function styles() {
  return src(path.styles.src, { base: 'src/' + 'static/scss/' })
  .pipe(sass())
  .pipe(postcss([
      postcssPresetEnv({
          browsers: 'last 4 versions',
          preserve: true,
      }),
  ]))
  .pipe(gulpif(app.isProd, postcss([cssnano])))
  .pipe(gulpif(app.isProd, rename({
      suffix: '.min',
      extname: '.css',
  })))
  .pipe(dest(path.styles.dist));
};
