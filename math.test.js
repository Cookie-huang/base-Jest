import { sum, minus } from "./math";

test("1 + 2 等于 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("两个浮点数字相加", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});
