import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { toLine } from './utils';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus, { locale: zhCn });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`au-icon${toLine(key)}`, component);
    }
  },
};
