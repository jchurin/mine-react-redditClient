const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@rcshared': path.resolve(__dirname, './src/app/view/shared'),
    },
  },
};
