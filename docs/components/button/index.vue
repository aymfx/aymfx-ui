<template>
  <div class="btn">
    <au-button @click="handleClick">默认按钮</au-button>
    <div style="margin-top: 20px;"></div>
    <au-button type="primary" @click="handleClick('debounce')" :debounce-wait="3000">防抖按钮</au-button>
    <div style="margin-top: 20px;"></div>
    <au-button type="success" @click="handleClick('throttle')" :throttle-wait="3000">节流按钮</au-button>
  </div>
</template>

<script setup>
import { AuButton } from '@/packages';
import { ElMessage, ElButton } from "element-plus";

const handleClick = (type) => {
  if (type === 'debounce') {
    ElMessage.success('防抖按钮, 3秒后会有提示');

  } else if (type === 'throttle') {
    ElMessage.success('节流按钮,3秒内出发一次');
  } else {
    ElMessage.success('默认按钮,随便出发');

  }
}
</script>

<style>
.btn {
  margin: 20px;
}
</style>