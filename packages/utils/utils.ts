//  大写转小写 然后-xxxx
export const toLine = (s: string) => s.replace(/([A-Z])/g, '-$1').toLowerCase();
