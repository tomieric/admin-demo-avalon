var path = require('path')
var webpack = require('webpack')
// html注入
var htmlWebpackPlugin = require('html-webpack-plugin')
// 目录清空
var Clean = require('clean-webpack-plugin')
// css文件独立
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // 入口文件
  entry: {
    // 合并应用文件
    app: './app/entry.js',
    // 合并共用依赖库文件
    vendor: ['avalon', 'mmStateDemand', 'jquery']
  },
  // 输出目录
  output: {
    path: './dev',
    // 合并后的文件名
    filename: 'bundle.js'
  },
  // 模块处理
  module: {
    // 加载器编译
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=2048',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      }
    ]
  },
  // 解决方案
  resolve: {
    // 可省略扩展名
    extensions: ['.js', '.css', '.html', ''],
    // 配置共用路径，类似于 express 的 public 目录
    rroot: [path.join(__dirname, 'app/controller'), path.join(__dirname, 'app/components'),path.join(__dirname, 'app/vendor'), path.join(__dirname, 'app/global'), path.join(__dirname, 'app/api')],
    // 配置别名，减少路径，类似于 require paths
    alias: {
      domReady: 'domReady/domReady.js',
      jquery: 'jquery/jquery.js',
      avalon: 'avalon/avalon.shim.js',
      mmState: 'mm-router/mmState.js',
      mmPromise: 'mm-router/mmPromise.js',
      mmStateDemand: 'mm-router/mmState.demand.js',
      mmValidation: 'mm-validation/avalon.validation.js',
      api: 'api.js'
    }
  },
  // 使用插件转换
  plugins: [
    // 清空文件夹
    new Clean('dev'),
    // 独立 css 文件
    new ExtractTextPlugin('[name].css'),
    // 去除重复模块
    //new webpack.optimize.DedupePlugin(),
    // 抽取共用模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    // html 注入
    new htmlWebpackPlugin({
      inject: 'body',
      //favicon: './app/global/images/favicon.ico',
      // 单页面模板路径
      template: './app/controller/index.html'
    })

  ]
}
