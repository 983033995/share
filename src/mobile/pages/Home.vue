<!--
 * @Description: 移动端首页
 * @Author: zhangHeTeng
 * @Date: 2020-10-05 10:45:28
 * @LastEditTime: 2020-10-11 19:01:18
 * @LastEditors: zhangHeTeng
-->

<template>
  <div class="mobile-home">
    <nav-menu></nav-menu>
    <banner></banner>
    <tab-nav></tab-nav>
  </div>
</template>

<script>
import navMenu from "../components/NavMenu";
import banner from "../components/FocusBanner";
import tabNav from "../components/TabNav";
export default {
  name: "mobileHome",
  data() {
    return {};
  },
  components: {
    navMenu,
    banner,
    tabNav
  }
};
</script>

<style lang="less" scoped>
.mobile-home {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
