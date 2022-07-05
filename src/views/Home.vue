<script setup lang="ts">
import { ref } from 'vue';
console.log(123);
</script>

<template>
  <div class="btn">123</div>
</template>

<style lang="less" scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md bg-blue-600 inline-block;
}

.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
