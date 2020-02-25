require('dotenv');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public', 'js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
