import type { App, Plugin } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { toLine } from './utils';
import { AuButton } from './button';
import { AuFormToggle } from './form-toggle';

const components = [AuButton, AuFormToggle];
const install = makeInstaller(components);

export { AuButton, AuFormToggle };
export default install;

// 将所有的组件都加载一遍
function makeInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
    // 安装icons
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`au-icon${toLine(key)}`, component);
    }
  };

  return install;
}
