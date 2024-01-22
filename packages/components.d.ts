import AuButton from './button';

declare module 'vue' {
  export interface GlobalComponents {
    AuButton: typeof AuButton;
  }
}
