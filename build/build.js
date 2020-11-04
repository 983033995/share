/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-09-27 10:20:20
 * @LastEditTime: 2020-11-04 14:51:39
 * @LastEditors: zhangHeTeng
 */
const webpack = require("webpack");
const path = require("path");
const servePaths = require("./servePath");
const resolve = (src) => path.resolve(__dirname, src);
const env = process.env.npm_lifecycle_event;
const servePath = servePaths[env];
console.log("servePath", servePath);
const alias = {
  "@img": resolve("../src/assets/image"),
  "@components": resolve("../src/components"),
  "@assets": resolve("../src/assets/")
};
const plugins = [
  new webpack.DefinePlugin({
    BASE_URL: JSON.stringify(servePath)
  }),
  new webpack.ProvidePlugin({
    API: [resolve("../src/request/index.js"), "default"],
    _: [resolve("../src/util/loadsh.js"), "default"]
  }),
  new webpack.NormalModuleReplacementPlugin(/(.*)-FILE_NAME(\.*)/, function(
    res
  ) {
    res.request = res.request.replace(/-FILE_NAME/, "store");
  })
];
module.exports = {
  webpack,
  path,
  servePath,
  alias,
  plugins
};
