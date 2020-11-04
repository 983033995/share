<!--
 * @Description: 首页发现和推荐栏目的列表
 * @Author: zhangHeTeng
 * @Date: 2020-10-09 20:20:55
 * @LastEditTime: 2020-10-14 20:15:53
 * @LastEditors: zhangHeTeng
-->

<template>
  <div class="item">
    <div class="img-text">
      <div class="left">
        <div class="item-title">{{ item.title }}</div>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
      <div class="image">
        <img :src="item.src" alt="" />
      </div>
    </div>
    <div class="supply">
      <div class="time">{{ item.time }}</div>

      <div>
        <span class="iconfont icondingwei"></span>
        {{ item.place }}
      </div>
      <div>
        <span class="iconfont iconyonghu"></span>
        {{ item.role }}
      </div>
      <div>
        <span class="iconfont iconxinheart118"></span>
        {{ item.star }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemList",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 100%;
  margin: 10px 0;
  background-color: @white;
  padding: 10px 0;
  .img-text {
    width: 100%;
    display: flex;
    overflow: hidden;
    .left {
      flex: 1;
      padding: 0 10px;
      height: 130px;
      overflow: hidden;
      .item-title {
        width: 100%;
        height: 100px;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 5;
        line-height: 20px;
        font-size: 16px;
        color: @black;
        font-weight: bold;
        text-align: left;
      }
      .content {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: @gray;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .image {
      width: 165px;
      height: 130px;
      margin: 0 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .supply {
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    font-size: 12px;
    color: @gray;
    overflow: hidden;
    div {
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      margin: 0 5px;
    }
  }
}
</style>
