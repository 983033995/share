<!--
 * @Description: 移动端底部导航组件
 * @Author: zhangHeTeng
 * @Date: 2020-10-05 12:43:32
 * @LastEditTime: 2020-10-14 20:00:18
 * @LastEditors: zhangHeTeng
-->

<template>
  <div class="nav-menu">
    <router-link to="/mobile/home">首页</router-link>
    <router-link to="/mobile/publish">发布</router-link>
    <router-link to="/mobile/me">我的</router-link>
  </div>
</template>

<style lang="less" scoped>
.nav-menu {
  width: 100%;
  height: 45px;
  display: flex;
  background-color: @white;
  & > a {
    display: block;
    flex: 1;
    line-height: 45px;
    text-align: center;
    color: #747373;
    text-decoration: none;
    position: relative;
  }
  .router-link-active {
    color: @light-black;
    &::after {
      content: "";
      width: 80%;
      height: 2px;
      background-color: @light-black;
      position: absolute;
      left: 10%;
      bottom: 0;
    }
  }
}
</style>
