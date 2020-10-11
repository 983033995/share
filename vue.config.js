/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-09-27 10:19:42
 * @LastEditTime: 2020-10-08 08:44:18
 * @LastEditors: zhangHeTeng
 */
const { servePath, alias, plugins } = require("./build/build");
module.exports = {
  publicPath: "./",

  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },

  devServer: {
    proxy: servePath
  },

  configureWebpack: {
    resolve: { alias },
    plugins
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  }
};
