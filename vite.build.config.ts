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
  },
  build: {
    outDir: 'dist',
    // cssCodeSplit: true, // 强制内联CSS
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'element-plus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
    lib: {
      // entry: resolve(__dirname, 'packages/index.ts'),
      entry: './packages/index.ts',
      name: 'aymfx-ui',
      fileName: 'aymfx-ui',
    },
  },
});
