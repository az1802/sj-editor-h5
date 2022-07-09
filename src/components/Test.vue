<script lang="ts">
console.log('other script');
</script>
<script setup lang="ts">
import { ref, defineExpose, onMounted } from 'vue';
const val = ref('aaa');
const v1 = ref('aaaaa');
let a = 'aaa';
onMounted(() => {
  console.log(this, a);
});
defineExpose({
  val,
});
defineProps({
  foo: {
    type: String,
  },
});
defineEmits({
  change(num: number) {
    console.log(num);
    return num % 2 == 0;
  },
});
</script>

<template>
  <div class="test-a">
    <div>input---- <input type="text" v-model="val" /></div>
    <div @click="$emit('change', 124)">{{ v1 }}</div>
  </div>
</template>

<style lang="less" scoped></style>
