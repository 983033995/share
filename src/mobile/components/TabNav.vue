<!--
 * @Description: 首页发现与推荐切换栏
 * @Author: zhangHeTeng
 * @Date: 2020-10-09 15:01:13
 * @LastEditTime: 2020-10-11 21:01:15
 * @LastEditors: zhangHeTeng
-->

<template>
  <div class="tab-nav">
    <div class="nav-menu">
      <div
        class="menu"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in navMenu"
        :key="index"
        @click="changeItem(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="menu-info">
      <item-list
        v-for="(item, index) in navData"
        :key="index"
        :item="item"
      ></item-list>
    </div>
  </div>
</template>

<script>
import itemList from "../components/ItemList";
export default {
  name: "tabNav",
  data() {
    return {
      navMenu: ["发现", "推荐"],
      navData: [],
      currentIndex: 0
    };
  },
  components: {
    itemList
  },
  mounted() {
    this.initData(this.currentIndex);
  },
  methods: {
    changeItem(index) {
      this.currentIndex = index;
      // todo 接口请求对应的列表数据
      this.initData(index);
    },
    initData(index) {
      if (index === 0) {
        this.navData = [
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2184140149,2116977414&fm=26&gp=0.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2184140149,2116977414&fm=26&gp=0.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2184140149,2116977414&fm=26&gp=0.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2184140149,2116977414&fm=26&gp=0.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2184140149,2116977414&fm=26&gp=0.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          }
        ];
      } else {
        this.navData = [
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602425241952&di=bdd1569a65285b9118f1fea3cf688402&imgtype=0&src=http%3A%2F%2Fimg3.duote.com%2Fduoteimg%2Fdtnew_techup_img%2F20190625%2F20190625100003_66397.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602425241952&di=bdd1569a65285b9118f1fea3cf688402&imgtype=0&src=http%3A%2F%2Fimg3.duote.com%2Fduoteimg%2Fdtnew_techup_img%2F20190625%2F20190625100003_66397.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602425241952&di=bdd1569a65285b9118f1fea3cf688402&imgtype=0&src=http%3A%2F%2Fimg3.duote.com%2Fduoteimg%2Fdtnew_techup_img%2F20190625%2F20190625100003_66397.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602425241952&di=bdd1569a65285b9118f1fea3cf688402&imgtype=0&src=http%3A%2F%2Fimg3.duote.com%2Fduoteimg%2Fdtnew_techup_img%2F20190625%2F20190625100003_66397.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          },
          {
            title:
              "为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效",
            content:
              "借助人工智能，将放疗科医生借助人工智能，将放疗科医生借助人工智能，将放疗科医生",
            src:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602425241952&di=bdd1569a65285b9118f1fea3cf688402&imgtype=0&src=http%3A%2F%2Fimg3.duote.com%2Fduoteimg%2Fdtnew_techup_img%2F20190625%2F20190625100003_66397.jpg",
            time: "1分钟前",
            place: "广东-深圳",
            role: "user",
            star: "1",
            isStar: 0
          }
        ];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tab-nav {
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .nav-menu {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #000;
    font-size: 14px;
    display: flex;
    border-bottom: 1px solid #c5c5c5;
    margin-bottom: 5px;
    .menu {
      flex: 1;
      position: relative;
    }
    .active {
      &::after {
        content: "";
        width: 40px;
        height: 4px;
        background-color: #ff0000;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -20px;
      }
    }
  }
  .menu-info {
    width: 100%;
    flex: 1;
    overflow-y: auto;
  }
}
</style>
