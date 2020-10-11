<!--
 * @Description: 
 * @Author: zhangHeTeng
 * @Date: 2020-10-08 08:58:54
 * @LastEditTime: 2020-10-09 20:17:36
 * @LastEditors: zhangHeTeng
-->

<template>
  <div class="nav-menu">
    <div class="search">
      <i class="cubeic-search"></i>
      <input type="text" placeholder="输入想查找的城市" />
    </div>
    <div class="city" @click="showCity = true">
      北京<i class="cubeic-pulldown"></i>
    </div>
    <transition name="slide">
      <div class="city-area" v-if="showCity">
        <div class="city-top">
          <div class="close-city" @click="showCity = false">
            <i class="cubeic-close"></i>
          </div>
          <div class="search-city">
            <input type="text" placeholder="城市名" />
          </div>
        </div>
        <city class="city-list"></city>
      </div>
    </transition>
  </div>
</template>

<script>
import city from "../components/City";
export default {
  name: "navMenu",
  data() {
    return {
      showCity: false
    };
  },
  components: {
    city
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.nav-menu {
  height: 60px;
  overflow: hidden;
  display: flex;
  background-color: #ff4467;
  .search {
    flex: 1;
    height: 40px;
    line-height: 40px;
    margin: 5px 20px;
    border: 1px solid #333;
    border-radius: 20px;
    display: flex;
    overflow: hidden;
    background-color: #fff;
    i {
      font-size: 20px;
      color: #666666;
      width: 40px;
      height: 40px;
      display: block;
      background-color: #fff;
    }
    input {
      height: 20px;
      border: none;
      outline: none;
      padding: 10px;
      display: block;
      flex: 1;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .city {
    width: 70px;
    line-height: 60px;
    color: #fff;
    font-size: 16px;
  }
  .city-area {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 999;
    display: flex;
    flex-direction: column;
    .city-top {
      width: 100%;
      height: 60px;
      display: flex;
      overflow: hidden;
      background-color: #ff4467;
      .close-city {
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
      }
      .search-city {
        flex: 1;
        margin: 0 20px;
        height: 60px;
        display: flex;
        input {
          flex: 1;
          outline: none;
          padding: 10px 20px;
          height: 20px;
          margin-top: 10px;
        }
      }
    }
    .city-list {
      width: 100%;
      flex: 1;
      text-align: left;
    }
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(800px);
    transition: all 0.3s linear;
  }
  .slide-enter-to {
    transform: translateX(0px);
    transition: all 0.3s linear;
  }
}
</style>
