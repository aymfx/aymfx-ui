import type { App, Plugin } from 'vue';
import { AuButton } from './button';

const components = [AuButton];
const install = makeInstaller(components);

export { install, AuButton };
export default install;

// 将所有的组件都加载一遍
function makeInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };

  return install;
}
