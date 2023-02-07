const gulp = require('gulp');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const images = require('./gulp/tasks/images');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const html = require('./gulp/tasks/html');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const app = require('./gulp/config/app');

const mainTasks = gulp.parallel(html, styles, scripts, images, spriteSVG, fonts);
const dev = gulp.series(clean, mainTasks, serve);
const build = gulp.series(clean, mainTasks);

// Таск default
exports.default = app.isProd
 ? build
 : dev;
