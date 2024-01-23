<script lang="ts" setup>
import { ElForm } from 'element-plus';
import { AuformProps } from './form-toggle.type';

const props = defineProps(AuformProps);

defineOptions({
  name: 'AuFormToggle',
});
</script>

<template>
  <el-form v-model="props">
    <slot></slot>
    <el-form-item>
      <el-button type="primary">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped>
.au-form-toggle {}
</style>
