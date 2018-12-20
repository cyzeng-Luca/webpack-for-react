var webpack = require('webpack');
var webpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack.dev.conf');
//路径为文件夹，自动引入index文件
var config = require('../config');

var opn = require('opn');

var compiler = webpack(webpackConfig);


var uri = 'http://localhost:' + config.dev.port;

var server = new webpackDevServer(compiler,{
  inline: true,
  hot: true,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  proxy: {
    "/api": {
      "target": "http://127.0.0.1:8888",
      "secure": false,
      "changeOrigin": true,
      "pathRewrite": {'^/api' : ''}
      }
  },
});

server.listen(config.dev.port,'localhost',function(error){
  if(error){
    throw error;
  }
  //服务启动后，打开网页
  opn(uri);
});
