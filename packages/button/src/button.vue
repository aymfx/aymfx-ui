<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { AuButtonProps } from './button.type';

const emit = defineEmits<{
  (e: 'click', val: MouseEvent): void
}>()
const props = defineProps(AuButtonProps)

let timer: NodeJS.Timeout

// 节流函数
const throttleFunc = (e: MouseEvent) => {
  if (timer !== undefined) {
    return
  }
  timer = setTimeout(() => {
    emit('click', e)
    clearTimeout(timer)
  }, props.throttleWait)
}

// 防抖
const debounceFunc = (e: MouseEvent) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    emit('click', e)
  }, props.debounceWait)
}

const handleClick = (e: MouseEvent) => {
  // 防抖
  if (props.debounceWait > 0) {
    debounceFunc(e)
  } else if (props.throttleWait > 0) {
    throttleFunc(e)
  } else {
    emit('click', e)
  }
};

defineOptions({
  name: 'AuButton',
});
</script>

<template>
  <div>
    <el-button v-bind="$props" @click="handleClick">
      <slot v-if="$slots.default" />
      <template v-if="$slots.loading" #loading>
        <slot name="loading" />
      </template>
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
    </el-button>
  </div>
</template>
