/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-09-27 10:18:17
 * @LastEditTime: 2020-10-08 08:45:17
 * @LastEditors: zhangHeTeng
 */
import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cube from "cube-ui";

Vue.use(Cube);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
