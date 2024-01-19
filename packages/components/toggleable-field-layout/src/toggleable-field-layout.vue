<script lang="ts" setup>
import { ElIcon } from "element-plus";
import { ArrowDown } from '@element-plus/icons-vue'

debugger
defineOptions({
  name: 'AuToggleableFieldLayout'
})

</script>

<template>
  <div>
    <slot></slot>
    <span>查看更多</span>
    <el-icon>
      <ArrowDown></ArrowDown>
    </el-icon>
  </div>
</template>