/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-09-27 10:19:42
 * @LastEditTime: 2020-11-04 15:16:02
 * @LastEditors: zhangHeTeng
 */
const { servePath, alias, plugins, path } = require("./build/build");
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
    proxy: servePath,
    open: true
  },

  configureWebpack: {
    resolve: { alias },
    plugins
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    },
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/global.less")]
    }
  }
};
