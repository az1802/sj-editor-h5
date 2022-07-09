<script setup lang="ts">
import { ref, isRef, reactive, markRaw } from 'vue';
const r1 = ref<Array<number>>([1, 2, 3, 4, 5]);
function handleClick() {
  r1.value.length = 3;
}

const foo = markRaw({
  nested: {},
});

const bar = reactive({
  // 虽然 `foo` 被标记为原始，但 foo.nested 不是。
  nested: foo.nested,
});

console.log(foo.nested, bar.nested); // false
</script>

<template>
  <div class="btn">{{ r1[4] }}</div>
  <div class="btn" @click="handleClick">click</div>
</template>

<style lang="less" scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md bg-blue-600 inline-block;
}

.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
