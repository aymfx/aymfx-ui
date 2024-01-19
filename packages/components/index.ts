import type { App, Plugin } from 'vue';
import { AuButton } from './button';
import { AuToggleableFieldLayout } from './toggleable-field-layout';

const components = [AuButton, AuToggleableFieldLayout];
const install = makeInstaller(components);

export { AuButton, AuToggleableFieldLayout };
export default install;

// 将所有的组件都加载一遍
function makeInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };

  return install;
}
