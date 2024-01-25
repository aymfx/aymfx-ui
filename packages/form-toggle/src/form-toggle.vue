<script lang="ts" setup>
import { ref } from 'vue';
import { ElForm, ElIcon, FormInstance } from 'element-plus';
import { CaretTop, CaretBottom } from '@element-plus/icons-vue';
import { AuformProps } from './form-toggle.type';
const props = defineProps(AuformProps);
const formRef = ref<FormInstance>()
const showIcon = ref(false);
defineOptions({
  name: 'AuFormToggle',
});

defineExpose({
  ref: formRef
})
</script>

<template>
  <el-form ref="formRef" v-bind="$props" class="au-form-toggle">
    <slot />
    <slot name="append" v-if="showIcon"></slot>
    <el-form-item v-if="props.showBtns">
      <slot name="btns" />
      <p @click="showIcon = !showIcon">
        <span v-if="showIcon" class="label">收起<el-icon class="icon">
            <CaretTop />
          </el-icon></span>
        <span v-else class="label">展开<el-icon class="icon">
            <CaretBottom />
          </el-icon></span>
      </p>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped>
.au-form-toggle {
  .label {
    display: flex;
    align-items: center;
    padding-left: 5px;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer
  }

  .icon {
    margin-left: 5px;
  }
}
</style>
