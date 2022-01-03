<template>
  <div class="login_container">
      <header>
        <div class="title">
          一起探
        </div>
      </header>
      <main>
        <van-form @submit="onLogin">
          <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ validator: usernameValidator, message: '用户名3~15个字符，仅限于字母数字下划线中文' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ validator: passwordValidator, message: '密码长度为6~16个字符' }]"
          />
          <div class="registered">
            <router-link to="/register">没有账号？点击注册</router-link>
          </div>
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </main>
  </div>
</template>

<script lang="js">
import {Notify} from "vant";

export default {
  name: "Login",
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLogin(values){
      console.log('submit', values);
      Notify({ type: 'success', message: '登录成功！正在跳转到App中...',duration:1000 });
      this.$router.push({path: '/personalcenter'})
    },
    usernameValidator(value) {
      return /^[\w\u4e00-\u9fa5]{3,15}$/.test(value);
    },
    passwordValidator(value){
      return /^.{6,16}$/.test(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  margin-top: 100px;
  header {
    display: flex;
    justify-content: center;
    padding: 20px;
    .title {
      color: #fd5c62;
      font-size: 32px;
    }
  }
  main {
    margin-top: 20px;
    .registered {
      float: right;
      margin-right: 10px;
      padding: 8px;
      color: #c8cddb;
    }
  }
}
</style>