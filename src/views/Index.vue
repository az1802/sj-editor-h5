<script setup lang="ts">
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';
import { ref } from 'vue';
</script>

<template>
  <a-layout class="page">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout-content>
      <router-view> </router-view>
    </a-layout-content>
    <a-layout-footer>
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped></style>
