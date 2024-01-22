<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import { ButtonType } from './button.type';

const type = ref<ButtonType>('primary');

defineOptions({
  name: 'AuButton',
});
</script>

<template>
  <div>
    <h1>测试打包问题</h1>
    <el-button :type="type">
      <slot></slot>
    </el-button>
  </div>
</template>
