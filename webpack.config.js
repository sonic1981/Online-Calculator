const { merge } = require("webpack-merge");
const base = require("./webpack.config.base.js");

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3010
  },
  devtool: 'inline-source-map'
});