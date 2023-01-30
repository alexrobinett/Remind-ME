const path = require('path');

const config = {
  entry: './src/index.js',
  mode: 'development',
  module: {},
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [],
};

module.exports = config;
