/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-09-27 10:18:17
 * @LastEditTime: 2020-11-02 15:50:39
 * @LastEditors: zhangHeTeng
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";

Vue.use(VueRouter);
const equipment = navigator.userAgent.match(
  /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  console.log("to, from", to, from);
  if (equipment) {
    if (to.name.includes("mobile")) {
      next();
    } else {
      next({ path: "/mobile" });
    }
  } else {
    if (to.name.includes("mobile")) {
      next({ path: "/index" });
    } else {
      next();
    }
  }
});
export { router, equipment };
