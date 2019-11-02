const path = require('path')
const VueloaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // production
  entry: {
    bundle: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash:5].js'
  },
  resolve: { // 寻找文件
    extensions: ['.vue', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: { // 依赖
    rules: [{ //文件处理规则
      test: /\.vue/,
      loader: 'vue-loader'
    }]
  },
  plugins: [ //插件
    new VueloaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ]
}