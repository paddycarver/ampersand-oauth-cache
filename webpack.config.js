require('babel/register')
var webpack = require('webpack')
var path = require('path')

module.exports = function () {
  var manifest = {
    entry: path.join(__dirname, 'main.js'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /(\.js$)/, loader: 'babel-loader', exclude: /node_modules/ },
      ]
    },
    resolve: {
      extensions: ['', '.js']
    },
    modulesDirectories: ["node_modules"],
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      })
    ]
  }
  return manifest
}()
