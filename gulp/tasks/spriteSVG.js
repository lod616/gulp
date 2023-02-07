const { src, dest } = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const path = require('../config/path');

module.exports = function spriteSVG() {
  return src(path.spriteSVG.src)
    .pipe(svgmin({
      js2svg: {
        pretty: true,
      },
    }))
    .pipe(cheerio({
      run($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true },
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: 'sprite.svg',
        },
      },
    }))
    .pipe(dest(path.spriteSVG.dist));
};
