const server = require('browser-sync').create();
const gulp = require('gulp');
const images = require('./images');
const svgSprite = require('./spriteSVG');
const styles = require('./styles');
const html = require('./html');
const scripts = require('./scripts');

module.exports = function serve(cb) {
  server.init({
      server: 'dist',
      notify: false,
      open: true,
      cors: true,
    });
  gulp.watch('src/**/*.html', gulp.series(html)).on('change', server.reload);
  gulp.watch('src/static/images/**/*.{gif,png,jpg,svg,webp}', gulp.series(images)).on('change', server.reload);
  gulp.watch('src/static/scss/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('src/static/js/**/*.js', gulp.series(scripts)).on('change', server.reload);
  gulp.watch('src/static/images/sprite/svg/*.svg', gulp.series(svgSprite)).on('change', server.reload);

  return cb();
};
