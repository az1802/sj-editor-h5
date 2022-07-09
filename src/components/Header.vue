<script setup lang="ts">
import { ref } from 'vue';

async function logout() {}
const smMode = ref(true);
</script>

<template>
  <a-row type="flex" justify="space-between" align="center">
    <a-col :span="6" class="logo-wrapper">
      <router-link to="/">
        <!-- <img src="../assets/logo.png" alt="" class="img" /> -->
      </router-link>
    </a-col>
    <a-col :span="12" class="space-x-10 right-col">
      <a-button type="primary" shape="round">
        <router-link to="/login">登录</router-link>
      </a-button>
      <a-button type="primary" shape="round">
        <router-link to="/login">创建设计</router-link>
      </a-button>
      <a-button type="primary" shape="round">
        <router-link to="/login">我的作品</router-link>
      </a-button>
      <a-dropdown-button>
        <router-link to="/setting">sunj</router-link>
        <template v-slot:overlay>
          <a-menu>
            <a-menu-item key="2" v-if="smMode">
              <router-link to="/mywork">我的作品</router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/setting">个人设置</router-link>
            </a-menu-item>
            <a-menu-item key="4" @click="logout">登出</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown-button>
    </a-col>
  </a-row>
</template>

<style lang="less" scoped>
.img {
  height: 52px;
}
.right-col {
  text-align: right;
}
</style>
