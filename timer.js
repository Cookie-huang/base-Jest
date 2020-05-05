export const timer = callback => {
  setTimeout(() => {
    callback && callback();
  }, 3000);
};
