<!--
 * @Description: 
 * @Author: zhangHeTeng
 * @Date: 2020-10-08 08:58:54
 * @LastEditTime: 2020-10-14 20:04:32
 * @LastEditors: zhangHeTeng
-->

<template>
  <div class="nav-menu">
    <div class="search">
      <i class="cubeic-search"></i>
      <input type="text" placeholder="输入想查找的城市" />
    </div>
    <div class="city" @click="showCity = true">
      {{ currentCity }}<i class="cubeic-pulldown"></i>
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
      showCity: false,
      currentCity: "未知",
    };
  },
  components: {
    city,
  },
  mounted() {
    this.getPosition();
  },
  methods: {
    // 城市定位
    /* eslint-disable */
    getPosition() {
      let _this = this;
      let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          let mk = new BMap.Marker(r.point);
          let currentLat = r.point.lat;
          let currentLon = r.point.lng;
          let pt = new BMap.Point(currentLon, currentLat);
          let geoc = new BMap.Geocoder();
          geoc.getLocation(pt, function (rs) {
            let addComp = rs.addressComponents;
            console.log("addComp", addComp);
            _this.currentCity = addComp.city;
          });
        }
      });
    },
    /* eslint-disable */
  },
};
</script>

<style lang="less" scoped>
.nav-menu {
  height: 60px;
  display: flex;
  background-color: @light-red;
  .search {
    flex: 1;
    height: 40px;
    line-height: 40px;
    margin: 5px 20px;
    border: 1px solid @light-black;
    border-radius: 20px;
    display: flex;
    overflow: hidden;
    background-color: @white;
    i {
      font-size: 20px;
      color: @black-gray;
      width: 40px;
      height: 40px;
      display: block;
      background-color: @white;
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
    color: @white;
    font-size: 16px;
  }
  .city-area {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: @white;
    z-index: 999;
    display: flex;
    flex-direction: column;
    .city-top {
      width: 100%;
      height: 60px;
      display: flex;
      overflow: hidden;
      background-color: @light-red;
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
