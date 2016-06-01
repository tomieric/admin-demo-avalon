var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var Clean = require('clean-webpack-plugin')
// css文件独立
var ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  entry: {
    app: './app/entry.js',
    vendor: ['avalon', 'mmStateDemand', 'jquery']
  },
  output: {
    path: './dist',
    filename: 'bundle.[chunkhash].js'
  },
  module: {
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
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.html', ''],
    root: [path.join(__dirname, 'app/controller'), path.join(__dirname, 'app/components'), path.join(__dirname, 'app/vendor'), path.join(__dirname, 'app/global')],
    alias: {
      domReady: 'domReady/domReady.js',
      jquery: 'jquery/jquery.js',
      avalon: 'avalon/avalon.shim.js',
      mmState: 'mm-router/mmState.js',
      mmStateDemand: 'mm-router/mmState.demand.js'
    }
  },
  plugins: [
    new Clean('dist'),
    // 独立 css 文件
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new htmlWebpackPlugin({
      inject: 'body',
      favicon: './app/global/images/favicon.ico',
      template: './app/controller/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin('v1.0 '+ new Date +' auth by tommyshao', {
      raw: false,
      entryOnly: false
    })
  ]
}
