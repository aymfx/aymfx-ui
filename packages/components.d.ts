import AuButton from './button';
import AuFormToggle from './form-toggle';

declare module 'vue' {
  export interface GlobalComponents {
    AuButton: typeof AuButton;
    AuFormToggle: typeof AuFormToggle;
  }
}
