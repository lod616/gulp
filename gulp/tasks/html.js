const { src, dest } = require('gulp');
const panini = require('panini');
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const path = require('../config/path');
const app = require('../config/app');

module.exports = function html() {
  panini.refresh();
  return src(path.html.src, { base: 'src/' })
      .pipe(panini({
          root: 'src/',
          layouts: 'src/' + 'modules/layouts/',
          partials: 'src/' + 'modules/partials/',
      }))
      .pipe(gulpif(app.isProd, htmlmin({
        useShortDoctype: true,
        collapseWhitespace: true,
        removeComments: true,
      })))
      .pipe(dest(path.html.dist));
};
