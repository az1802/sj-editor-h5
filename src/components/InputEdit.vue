<template>
  <div class="inline-edit" @click.stop="handleClick" ref="wrapper">
    <a-input
      v-model:value="innerValue"
      v-if="isEditing"
      :class="{ 'input-error': !validateCheck }"
      placeholder="文本不能为空"
    />
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, watch, defineEmits } from 'vue';
import useClickOutside from '../hooks/useClickOutside';
const isEditing = ref(false);
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(['change', 'clicked']);
const wrapper = ref<null | HTMLElement>(null);
const innerValue = ref(props.value);
watch(
  () => props.value,
  () => {
    innerValue.value = props.value;
  }
);
const isOutside = useClickOutside(wrapper, isEditing);
watch(isOutside, (newValue) => {
  if (!validateCheck.value) {
    return;
  }
  if (newValue && isEditing.value) {
    isEditing.value = false;
    emits('change', innerValue);
    isOutside.value = false;
  }
});

const handleClick = () => {
  setTimeout(() => {
    isEditing.value = true;
    emits('clicked');
  }, 100);
};
const validateCheck = computed(() => {
  return innerValue.value.trim() !== '';
});
</script>

<style scoped>
.inline-edit {
  cursor: pointer;
}
.input-error {
  border: 1px solid #f5222d;
}
.input-error:focus {
  border-color: #f5222d;
}
.input-error::placeholder {
  color: #f5222d;
}
</style>
