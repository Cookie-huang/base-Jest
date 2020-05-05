const data = { success: true };

export const getData = () => {
  return new Promise((resolved, reject) => {
    resolved(data);
  });
};
