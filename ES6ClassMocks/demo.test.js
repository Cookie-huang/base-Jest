/* 单元测试 */

/* 1. 如果 __mocks__ 里没有同名文件, 发现是类，会将 constructor ，里面的函数 全部替换成 jest.fn() */
// jest.mock("./Util");
// Util = jest.fn()
// Util.aFn = jest.fn()
// Util.bFn = jest.fn()

/* 2. 如果有 会到 __mocks__ 里找 */
jest.mock("./Util");

/* 3. 在本页写 */
// jest.mock("./Util", () => {
//   const Util = jest.fn(() => {
//     console.log("mock constructor");
//   });

//   Util.prototype.aFn = jest.fn(() => {
//     console.log("mock aFn");
//   });

//   Util.prototype.bFn = jest.fn(() => {
//     console.log("mock bFn");
//   });
//   return Util;
// });

import Util from "./Util";
import { demoFn } from "./demo";

// 直接测试带来的缺点：demoFn 会创建 Util 实例,效率低。
test("测试 demoFn", () => {
  demoFn("A", "B");
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].aFn).toHaveBeenCalled();
  expect(Util.mock.instances[0].bFn).toHaveBeenCalled();
  console.log(Util.mock);
  //   console.log(Util.mock.instances[0].aFn.mock);
  //   console.log(Util.mock.instances[0].bFn.mock);
});
