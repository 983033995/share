/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-11-04 14:56:07
 * @LastEditTime: 2020-11-04 15:04:24
 * @LastEditors: zhangHeTeng
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": "off",
    "np-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    API: true,
    BASE_URL: true,
    _: true
  }
};
