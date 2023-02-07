const { src, dest } = require('gulp');
const path = require('../config/path');

module.exports = function fonts() {
  return src(path.fonts.src, { base: 'src/' + 'static/fonts/' })
  .pipe(dest(path.fonts.dist));
};
