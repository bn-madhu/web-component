const path = require('path');

module.exports = {
    entry: './src/HelloWorldWebComponent.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'HelloWorldWebComponent.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };