<script lang="ts">
import { defineComponent, PropType, defineProps, defineEmits } from 'vue';
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  UnlockOutlined,
  DragOutlined,
} from '@ant-design/icons-vue';
import { ComponentData } from '../store/editor';
import InputEdit from '../components/InputEdit.vue';
</script>
<script setup lang="ts">
import { VueDraggableNext as Draggable } from 'vue-draggable-next';

const props = defineProps({
  list: {
    type: Array as PropType<ComponentData[]>,
    required: true,
  },
  selectedId: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(['select', 'change']);

const handleClick = (id?: string) => {
  emits('select', id || '');
};
const handleChange = (id: string, key: string, value: boolean) => {
  const data = {
    id,
    key,
    value,
  };
  emits('change', data);
};
</script>

<template>
  <draggable
    :list="list"
    handle=".handle"
    class="ant-list-items ant-list-bordered"
    ghost-class="ghost"
  >
    <li
      class="ant-list-item"
      v-for="item in list"
      :key="item.id"
      :class="{ active: item.id === selectedId }"
      @click="handleClick(item.id)"
    >
      <a-tooltip :title="item.isHidden ? '显示' : '隐藏'">
        <a-button
          shape="circle"
          @click="handleChange(item.id, 'isHidden', !item.isHidden)"
        >
          <template v-slot:icon v-if="item.isHidden"><EyeOutlined /></template>
          <template v-slot:icon v-else><EyeInvisibleOutlined /></template>
        </a-button>
      </a-tooltip>
      <a-tooltip :title="item.isLocked ? '解锁' : '锁定'">
        <a-button
          shape="circle"
          @click="handleChange(item.id, 'isLocked', !item.isLocked)"
        >
          <template v-slot:icon v-if="item.isLocked"><UnlockOutlined /></template>
          <template v-slot:icon v-else><LockOutlined /></template>
        </a-button>
      </a-tooltip>
      <InputEdit
        :value="item.layerName || ''"
        @clicked="handleClick"
        @change="
          (value) => {
            handleChange(item.id, 'layerName', value);
          }
        "
      >
        <span>{{ item.layerName }}</span>
      </InputEdit>
      <a-tooltip title="拖动排序">
        <a-button shape="circle" class="handle">
          <template v-slot:icon><DragOutlined /></template>
        </a-button>
      </a-tooltip>
    </li>
  </draggable>
</template>

<style lang="less" scoped>
.ant-list-item {
  padding: 10px 15px;
  transition: all 0.5s ease-out;
  cursor: pointer;
  justify-content: normal;
  border: 1px solid #fff;
  border-bottom-color: #f0f0f0;
}
.ant-list-item .handle {
  cursor: move;
  margin-left: auto;
}
.ant-list-item.active {
  border: 1px solid #1890ff;
}
.ant-list-item:hover {
  background: #e6f7ff;
}
.ant-list-item > * {
  margin-right: 10px;
}
.ant-list-item button {
  font-size: 12px;
}
</style>
