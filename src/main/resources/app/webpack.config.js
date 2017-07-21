var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = 'dist'

module.exports = {

  entry: {
    bundle: ['./web/main.js','./web/sub.js']
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, buildPath)
    
  },
  devServer: {
    contentBase: [path.join(__dirname, "web"), path.join(__dirname, "img")],//webpack generated contents
    publicPath: '/xyz/',//static content availablity location
    port: 8445  
  }
}