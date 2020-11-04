/*
 * @Description:
 * @Author: zhangHeTeng
 * @Date: 2020-10-05 10:35:08
 * @LastEditTime: 2020-11-02 15:21:55
 * @LastEditors: zhangHeTeng
 */
import Index from "../pc/pages/Index";
export default [
  {
    path: "/",
    name: "index",
    redirect: "/index"
  },
  // pc板块路由
  {
    path: "/index",
    name: "pcIndex",
    component: Index
  },
  // 移动端路由
  {
    path: "/mobile",
    name: "mobile",
    component: () =>
      import(/* webpackChunkName: "mobile" */ "../mobile/pages/Index"),
    redirect: "/mobile/home",
    children: [
      {
        path: "home",
        name: "mobileHome",
        component: () =>
          import(/* webpackChunkName: "mobile" */ "../mobile/pages/Home")
      },
      {
        path: "publish",
        name: "Publish",
        component: () =>
          import(/* webpackChunkName: "mobile" */ "../mobile/pages/Publish")
      },
      {
        path: "me",
        name: "me",
        component: () =>
          import(/* webpackChunkName: "mobile" */ "../mobile/pages/Me")
      }
    ]
  },
  {
    path: "/mobileLogin",
    name: "mobileLogin",
    component: () =>
      import(/* webpackChunkName: "mobile" */ "../mobile/pages/Login")
  }
];
