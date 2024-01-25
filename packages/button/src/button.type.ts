import { buttonProps } from 'element-plus';

export const AuButtonProps = {
  ...buttonProps,
  throttleWait: {
    type: Number,
    default: 0,
  },
  debounceWait: {
    type: Number,
    default: 0,
  },
};
