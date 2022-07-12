<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore, mapGetters } from 'vuex';

const store = useStore();

const userInfo = computed(() => store.state.user);
</script>

<template>
  <a-row type="flex" justify="space-between" align="center">
    <a-col :span="6" class="logo-wrapper">
      <router-link to="/">
        <img src="../assets/logo.png" alt="" class="img" />
      </router-link>
    </a-col>
    <a-col :span="12" class="space-x-10 right-col">
      <UserProfile :user="userInfo"></UserProfile>
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
