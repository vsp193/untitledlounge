const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const neatPaths = require("bourbon-neat").includePaths;

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node-modules'
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
      }
    }, {
			test: /\.scss$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'sass-loader', options: { includePaths: neatPaths } }
			]
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
       use: 'file'
    }]
  }
}
