const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');
const path = require('../config/path');
const app = require('../config/app');

module.exports = function images() {
  return src(path.images.src, { base: 'src/' + 'static/images/' })
    .pipe(gulpif(app.isProd, imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 85,
        progressive: true,
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false },
        ],
      }),
    ])))
    .pipe(dest(path.images.dist));
};
