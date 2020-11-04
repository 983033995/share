<!--
 * @Description: 
 * @Author: zhangHeTeng
 * @Date: 2020-10-31 17:30:42
 * @LastEditTime: 2020-11-04 15:06:58
 * @LastEditors: zhangHeTeng
-->
<template>
  <div class="content">
    <div class="logo">
      <img src="@img/shilu-login/logo.png" alt="" srcset="" />
    </div>
    <div class="form">
      <div class="form-item">
        <img src="@img/shilu-login/1.png" alt="" />
        <cube-input v-model="userName" placeholder="请输入用户名"></cube-input>
      </div>
      <div class="form-item">
        <img src="@img/shilu-login/2.png" alt="" />
        <cube-input
          v-model="password"
          placeholder="请输入密码"
          type="password"
          :eye="eye"
        ></cube-input>
      </div>
      <div class="submit-btn" @click="submitLogin">登录</div>
      <div class="agreenment">
        <router-link to="">忘记密码</router-link>
        <span>|</span>
        <router-link to="">注册账户</router-link>
      </div>
    </div>
  </div>
</template>

<script>
const { login } = API;
export default {
  data() {
    return {
      userName: "",
      password: "",
      eye: {
        open: true,
        reverse: true
      }
    };
  },
  mounted() {
    console.log("API", API);
  },
  methods: {
    submitLogin() {
      let params = { name: this.userName, password: this.password };
      login(params);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: @white;
  overflow: hidden;
  .logo {
    width: 100%;
    height: 80px;
    margin: 50px 0;
    img {
      display: block;
      width: 80px;
      height: 80px;
      margin: 0 auto;
      border-radius: 40px;
    }
  }
  .form {
    width: calc(~"100% - 40px");
    height: auto;
    padding: 0 20px;
    .form-item {
      width: 100%;
      height: 50px;
      overflow: hidden;
      display: flex;
      border-bottom: 1px solid @border-gray;
      img {
        width: 22px;
        height: 22px;
        margin-top: 14px;
      }
      /deep/ .cube-input {
        border: none;
        outline: none;
        flex: 1;
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
        font-size: @font-title;
        & > input {
          padding: 0;
        }
        &::after {
          border: none;
        }
      }
    }
    .submit-btn {
      width: 230px;
      height: 50px;
      line-height: 50px;
      font-size: @font-title;
      background: linear-gradient(-90deg, #3fcdeb, #bce29e);
      box-shadow: 3px 5px 2px 1px rgba(164, 217, 228, 0.4);
      border-radius: 25px;
      color: @white;
      margin: 50px auto 25px auto;
    }
    .agreenment {
      width: 100%;
      height: 30px;
      line-height: 30px;
      color: @orange;
      text-align: center;
      font-size: @font-text;
      & > a {
        padding: 0 10px;
        font-size: @font-text;
        color: @orange;
      }
    }
  }
}
</style>
