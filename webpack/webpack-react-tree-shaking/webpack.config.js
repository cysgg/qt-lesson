const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node-modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}