/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-09-27 10:18:17
 * @LastEditTime: 2020-11-02 15:55:24
 * @LastEditors: zhangHeTeng
 */
import Vue from "vue";
import App from "./App.vue";
import { router, equipment } from "./router";
import store from "./store";
import "../src/assets/css/global.less";
if (equipment) {
  // import Cube from "cube-ui";
  let Cube = require("cube-ui");
  require("./cube-ui");
  Vue.use(Cube);
  console.log("手机访问.");
} else {
  console.log("电脑访问.");
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
