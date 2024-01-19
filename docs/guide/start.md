# 快速开始

## 准备工作

项目中需要先安装[Vue3](https://cn.vuejs.org/)、[Element Plus](https://element-plus.org/zh-CN/guide/design.html)

## 安装

```bash
pnpm i aymfx-ui
```

## 使用

- 在入口文件中导入样式

```js
import aymfx/es/style.css';
```

- 使用组件

```vue
<template>
  <auButton type="primary" @click="handleClick">点我</auButton>
  <div>点击{{ count }}次</div>
</template>

<script setup lang="ts">
import { auxButton } from 'aymfx-ui';
import { ref } from 'vue';

const count = ref(0);

const handleClick = () => {
  count.value++;
};
</script>
```
