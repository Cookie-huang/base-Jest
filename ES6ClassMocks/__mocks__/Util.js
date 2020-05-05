// const Util = jest.fn();
// Util.prototype.aFn = jest.fn();
// Util.prototype.bFn = jest.fn();

const Util = jest.fn(() => {
  console.log("__mocks__ constructor");
});

Util.prototype.aFn = jest.fn(() => {
  console.log("__mocks__ aFn");
});

Util.prototype.bFn = jest.fn(() => {
  console.log("__mocks__ bFn");
});

export default Util;
