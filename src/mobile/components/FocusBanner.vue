<!--
 * @Description: 首页轮播图
 * @Author: zhangHeTeng
 * @Date: 2020-10-09 14:42:59
 * @LastEditTime: 2020-10-11 20:43:52
 * @LastEditors: zhangHeTeng
-->

<template>
  <div class="banner">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <img :src="item.image" />
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
import img1 from "../../assets/image/1.jpeg";
import img2 from "../../assets/image/2.jpeg";
import img3 from "../../assets/image/3.jpeg";
export default {
  data() {
    return {
      items: [
        {
          url: "",
          image: img1
        },
        {
          url: "",
          image: img2
        },
        {
          url: "",
          image: img3
        }
      ]
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 150px;
  overflow: hidden;
  img {
    width: 100%;
    height: 150px;
  }
}
</style>
