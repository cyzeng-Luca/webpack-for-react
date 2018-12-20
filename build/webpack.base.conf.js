//引入相关依赖
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//路径为文件夹，自动引入index文件
var config = require('../config');
var utils = require('./utils')

//设置变量
var ROOT_PATH = path.resolve(__dirname,'../');
var SRC_PATH = path.resolve(ROOT_PATH,'src');
var ASSETS_PATH = path.resolve(SRC_PATH,'assets');
var PAGE_PATH = path.resolve(SRC_PATH,'page');
var SHARE_PATH = path.resolve(SRC_PATH,'shared');


module.exports = {

  //打包入口 也可直接用文件夹名字，默认找index
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:9999",
    "webpack/hot/only-dev-server",
      path.join(SRC_PATH,'./index.jsx')
  ],
  output: {
    path: config.build.assetsRoot,
  },
  module:{
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json','.less','.scss', 'css'],
    alias: {
      // 'vue$': 'vue/dist/vue.common.js',
      "@src": SRC_PATH,
      "@assets": ASSETS_PATH,
      '@page': PAGE_PATH,
      '@shared': SHARE_PATH,
      // '@Components': path.join(SRC_PATH, 'components'),
      // '@Util': path.join(SRC_PATH, 'util'),
      // '@View': path.join(SRC_PATH, 'view')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_PATH + '/index.html',
      inject: 'body',
      minify: {
        removeComments: true,//移除注释
        removeAttributeQuotes: true//移除双引号
      },
      chunksSortMode: 'dependency'//排序方式
    })
  ]
}
