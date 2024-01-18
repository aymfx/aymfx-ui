<script setup lang="ts">
import { AuButton } from '../../dist/es/aymfx-ui.js'
</script>

<template>
  <div>
    <h1>app</h1>
    <au-button>测试了</au-button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
