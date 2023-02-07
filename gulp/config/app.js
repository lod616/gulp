const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd,
  isDev,
  webpack: {
    mode: isProd ? 'production' : 'development',
  },
};
