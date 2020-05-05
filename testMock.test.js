jest.mock("./testMock");

import { getData } from "./testMock";
const { getNumber } = jest.requireActual("./testMock.js");

test("测试 进阶mock 来自mock", async () => {
  return expect(getData()).resolves.toEqual({
    success: true
  });
});

test("测试2 来自原文件", () => {
  return expect(getNumber()).toBe(123);
});
