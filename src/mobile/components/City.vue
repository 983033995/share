<!--
 * @Description: 
 * @Author: zhangHeTeng
 * @Date: 2020-10-08 10:57:27
 * @LastEditTime: 2020-10-14 19:36:44
 * @LastEditors: zhangHeTeng
-->
<template>
  <div class="city-box">
    <cube-index-list
      :data="cityData"
      @select="selectItem"
      @title-click="clickTitle"
    ></cube-index-list>
  </div>
</template>

<script>
const cityData = [
  {
    name: "★热门城市",
    items: [
      {
        name: "北京",
        value: 1
      },
      {
        name: "上海",
        value: 2
      },
      {
        name: "广州",
        value: 3
      },
      {
        name: "深圳",
        value: 4
      }
    ]
  },
  {
    name: "A",
    items: [
      {
        name: "澳门",
        value: 5
      },
      {
        name: "安徽",
        value: 6
      }
    ]
  },
  {
    name: "B",
    items: [
      {
        name: "北京",
        value: 1
      }
    ]
  },
  {
    name: "C",
    items: [
      {
        name: "重庆",
        value: 7
      },
      {
        name: "成都",
        value: 8
      },
      {
        name: "长沙",
        value: 9
      },
      {
        name: "长春",
        value: 10
      }
    ]
  },
  {
    name: "D",
    items: [
      {
        name: "大连",
        value: 11
      },
      {
        name: "东莞",
        value: 12
      },
      {
        name: "大理",
        value: 13
      },
      {
        name: "敦煌",
        value: 14
      }
    ]
  },
  {
    name: "E",
    items: [
      {
        name: "鄂尔多斯",
        value: 15
      },
      {
        name: "恩施",
        value: 16
      },
      {
        name: "峨眉山",
        value: 17
      },
      {
        name: "额尔古纳",
        value: 18
      }
    ]
  },
  {
    name: "F",
    items: [
      {
        name: "福州",
        value: 19
      },
      {
        name: "佛山",
        value: 20
      },
      {
        name: "富阳",
        value: 21
      },
      {
        name: "富民",
        value: 22
      }
    ]
  }
];
export default {
  data() {
    return {
      title: "Current City: BEIJING",
      cityData: cityData
    };
  },
  methods: {
    selectItem() {},
    clickTitle(val) {
      console.log(val);
    }
  }
};
</script>

<style></style>
