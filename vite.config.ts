import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import eslint from 'eslint-plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), eslint()],
  resolve: {
    alias: {
      '@': '/packages',
    },
  }
});
