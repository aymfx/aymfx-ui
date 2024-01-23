<template>
  <div class="demo-icon-list">
    <div class="icon" v-for="icon in ElementPlusIconsVue" @click="copy(icon)">
      <component :is="icon" style="width: 30px"></component>
      <span>{{ icon.name }}</span>
    </div>
  </div>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { useCopy } from '@/packages/hooks/useCopy.ts';
import { toLine } from '@/packages/utils';

const copy = (icon) => {
  useCopy(`<au-icon${toLine(icon.name)}></au-icon${toLine(icon.name)}>`);
};
</script>

<style lang="scss">
.demo-icon-list {
  margin-top: 30px;
  width: 100%;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
  list-style: none;
  padding: 0px !important;
  border-top: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100px;
    border-right: 1px solid #dcdfe6;
    border-bottom: 1px solid #dcdfe6;
    cursor: pointer;

    span {
      margin: 5px;
    }
  }
}
svg {
  width: 2em;
  height: 2em;
}
</style>
