module.exports = {
  html: {
    src: 'src/' + '*.html',
    dist: 'dist/',
  },
  styles: {
    src: 'src/' + 'static/scss/*.scss',
    dist: 'dist/' + 'static/css/',
  },
  js: {
    src: 'src/' + 'static/js/*.js',
    dist: 'dist/' + 'static/js/',
  },
  images: {
    src: 'src/' + 'static/images/**/*.{jpg,png,svg,gif,ico,webp,xml,json}',
    dist: 'dist/' + 'static/images/',
  },
  spriteSVG: {
    src: 'src/' + 'static/images/sprite/svg/*.svg',
    dist: 'dist/' + 'static/images/sprite/svg',
  },
  fonts: {
    src: 'src/' + 'static/fonts/**/*.{eot,woff,woff2,ttf,svg,}',
    dist: 'dist/' + 'static/fonts/',
  },

};
