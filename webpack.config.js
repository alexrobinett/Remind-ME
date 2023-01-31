const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
      },

    ],
  },
 };