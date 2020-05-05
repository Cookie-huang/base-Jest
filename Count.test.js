import Count from "./Count";

let count = null;

// beforeAll(() => {
//   console.log("BeforeAll");
// });

// afterAll(() => {
//   console.log("AfterAll");
// });

// beforeEach(() => {
//   console.log("BeforeEach");
//   count = new Count();
// });

// afterEach(() => {
//   console.log("AfterEach");
// });

test("测试 Count 中的 add 方法", () => {
  console.log("测试 Count 中的 add 方法");
  count.add();
  expect(count.number).toBe(1);
});

test("测试 Count 中的 minus 方法", () => {
  console.log("测试 Count 中的 minus 方法");
  count.minus();
  expect(count.number).toBe(-1);
});
