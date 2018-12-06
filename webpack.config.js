 const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    "./src/index.ts"
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
             loader: "ts-loader"
          }
      },
      {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
             loader: "html-loader"
          }
      },
      {
          test: /\.sass$/,
          exclude: /node_modules/,
          use: [
             "style-loader",
             "css-loader",
             "sass-loader"
          ]
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
           use: [
             "style-loader",
             "css-loader",
             "sass-loader"
          ]
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  },
  output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    }
};
