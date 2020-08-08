const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@rc-shared': path.resolve(__dirname, './src/app/view/shared'),
      '@rc-redux': path.resolve(__dirname, './src/app/data/redux/store'),
      '@rc-constants': path.resolve(__dirname, './src/app/data/constants'),
      '@rc-api': path.resolve(__dirname, './src/app/data/api'),
    },
  },
};
