export const generateConfig = () => {
  return {
    server: "http://localhost",
    port: "8080",
    version: 1,
    time: new Date()
  };
};

export const generateAnotherConfig = () => {
  return {
    server: "http://localhost",
    port: "8080",
    version: 2
  };
};

/* w -> u    快照全部更新 */
/* w -> i -> u   快照交互式更新 */
