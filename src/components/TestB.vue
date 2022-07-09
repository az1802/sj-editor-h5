<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup(props, context) {
    console.log('context: ', context);
  },
  created() {
    console.log('created this---', this);
  },
});
</script>

<template>
  <div>Test B ---</div>
</template>

<style lang="less" scoped></style>
