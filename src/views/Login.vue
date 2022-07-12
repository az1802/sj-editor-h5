<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { userLogin } from '@hooks/userLogin';
import { message } from 'ant-design-vue';
import { ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';
const { loginInfo, getVeriCode, login } = userLogin();
const counter = ref(60);
const codeButtonDisable = ref(false);
const router = useRouter();
const store = useStore();

let timeId: number;

function startCounter() {
  counter.value = 60;
  codeButtonDisable.value = true;
  timeId = setInterval(() => {
    if (counter.value == 0) {
      resetCounter();
    } else {
      counter.value -= 1;
    }
  }, 1000);
}

function resetCounter() {
  clearInterval(timeId);
  counter.value = 60;
  codeButtonDisable.value = false;
}

async function loginIn() {
  store.dispatch('loginAndFetch', toRaw(loginInfo)).then((rawData) => {
    console.log('rawData: ', rawData);
    message.success('登录成功 2秒后跳转首页');
    setTimeout(() => {
      router.push('/');
    }, 2000);
  });
}
async function getCode() {
  if (codeButtonDisable.value) {
    return;
  }
  let veriCode = getVeriCode();
  if (veriCode) {
    startCounter();
  }
}
</script>

<template>
  <div class="login-page">
    <a-row>
      <a-col :span="12" class="aside">
        <img src="@assets/login.png" alt="" />
      </a-col>
      <a-col :span="12" class="login-area">
        <a-form :model="loginInfo" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
          <h2>欢迎回来</h2>
          <p>使用手机号码和验证码登录</p>
          <a-form-item label="用户名">
            <a-input v-model:value="loginInfo.phoneNumber" placeholder="请输入手机号">
              <template #suffix>
                <a-tooltip title="Extra information">
                  <UserOutlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
              <template>
                <LockOutlined tyle="color: rgba(0, 0, 0, 0.45)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item label="验证码">
            <a-input
              v-model:value="loginInfo.veriCode"
              placeholder="请输入验证码"
            ></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="loginIn">登录</a-button>
            <a-button type="primary" @click="getCode" :disabled="codeButtonDisable">
              {{ counter == 60 ? '获取验证码' : `${counter}s后重发` }}
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.logo-area {
  position: absolute;
  top: 30px;
  width: 150px;
}

.aside {
  height: 100vh;
  background-color: #1a1919;
  background-image: url('@/assets/login.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.aside .logo-img {
  width: 200px;
  margin-bottom: 20px;
}

.aside h2 {
  color: #cccccc;
  font-size: 29px;
}

.aside-inner {
  width: 60%;
  text-align: center;
}

.login-area {
  height: 100vh;
}

.login-area .ant-form {
  width: 350px;
}

.text-white-70 {
  color: #999;
  display: block;
  font-size: 19px;
}

.aside,
.login-area {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-area h2 {
  color: #333333;
  font-size: 29px;
}

.login-area .subTitle {
  color: #666666;
  font-size: 19px;
}

.login-area .ant-form-item-label {
  display: none;
}

.login-area .ant-input-prefix {
  left: auto;
  right: 30px;
  font-size: 19px;
}

.login-area .ant-input {
  font-size: 17px;
  padding: 20px 45px 20px 30px;
  background-color: #ebf2ff;
  border-color: #ebf2ff;
}
</style>
