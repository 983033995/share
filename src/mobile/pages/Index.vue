<!--
 * @Description: 
 * @Author: zhangHeTeng
 * @Date: 2020-10-05 10:36:44
 * @LastEditTime: 2020-10-11 19:04:13
 * @LastEditors: zhangHeTeng
-->
<template>
  <div class="mobile-view">
    <router-view class="mobile-content" />
    <foot-nav class="foot-nav"></foot-nav>
  </div>
</template>

<script>
import footNav from "../components/FootNav";
export default {
  name: "mobileIndex",
  data() {
    return {};
  },
  components: {
    footNav,
  },
};
</script>

<style lang="less" scoped>
.mobile-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .mobile-content {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    background-color: @ligtht-gray;
  }
}
</style>
