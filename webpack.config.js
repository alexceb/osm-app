var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = [
  {
    name: 'server',
    entry: './src/server/main.js',
    target: 'node',
    output: {
        path: __dirname + '/dist/server',
        filename: 'backend.js',
        publicPath: '/'
    },
    externals: nodeModules,
    module: {
      loaders: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    }
  },
  {
    name: 'client',
    entry: './src/client/index.js',
    output: {
        path: __dirname + '/dist/client',
        filename: 'bundle.js',
    },
    module: {
      loaders: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    }
  }
];

module.exports = config;