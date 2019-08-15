var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: "none",
  entry: {
    "build": "./csv_manager.js",
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    library: 'sparccsv',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
    ]
  },
  plugins: [
  ]
};
