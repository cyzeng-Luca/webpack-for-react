//引用相关依赖
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var utils = require('./utils');

var webpackConfig = merge(baseWebpackConfig,{
  mode: 'development',
  //输出文件名
  output: {
    filename: utils.assetsPath('js/[name].[hash].js'),
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    // proxy: {
    //   "/api": {
    //     "target": "http://127.0.0.1:8888",
    //     "secure": false,
    //     "changeOrigin": true,
    //     "pathRewrite": {'^/api' : ''}
    //     }
    // },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
module.exports = webpackConfig
