const { src, dest } = require('gulp');

const webpack = require('webpack-stream');
const path = require('../config/path');
const app = require('../config/app');

module.exports = function scripts() {
  return src(path.js.src, { base: 'src/' + 'static/js/' })
  .pipe(webpack(app.webpack))
  .pipe(dest(path.js.dist));
};
