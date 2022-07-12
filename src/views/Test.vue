<script setup lang="ts">
import { ref } from 'vue';
const val = ref('123');
const isEditing = ref(false);
</script>

<template>
  <div>
    input----
    <InputEdit :value="val" @click="isEditing = true">{{ val }}</InputEdit>
  </div>
</template>

<style lang="less" scoped></style>
