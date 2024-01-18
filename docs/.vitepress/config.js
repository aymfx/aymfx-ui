import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'aymfx-ui',
  title: 'aymfx-ui',
  description: '基于element-plus开发的组件库文档',
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  vite: {
    plugins: [vueJsx()],
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/aymfx/' }],
    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2024-present aymfx',
    },
    nav: [
      { text: '指南', link: '/guide/start' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/guide/': [
        {
          items: [{ text: '快速开始', link: '' }],
        },
      ],
      '/components/': [
        {
          text: '全新开发',
          items: [],
        },
        {
          text: '功能增强',
          items: [{ text: 'Button 按钮', link: '/components/button' }],
        },
        {
          text: '业务组件',
          items: [],
        },
        {
          text: '其他',
          items: [],
        },
      ],
    },
  },
});
