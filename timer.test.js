import { timer } from "./timer";

/* 来模拟定时器函数 */
// 如果你需要在一个文件或一个describe块中运行多次测试，可以在每次测试前手动添加 jest.useFakeTimers();，
// 或者在 beforeEach 中添加。 如果不这样做的话将导致内部的定时器不被重置。
beforeEach(() => {
  jest.useFakeTimers();
});

test("测试定时器1", () => {
  const fn = jest.fn();

  timer(fn);

  // 未执行
  expect(fn).not.toBeCalled();

  // 快进到终点
  jest.runAllTimers();

  // 已执行
  expect(fn).toBeCalled();
  expect(fn).toHaveBeenCalledTimes(1);
});

test("测试定时器2", () => {
  const fn = jest.fn();

  timer(fn);

  // 未执行
  expect(fn).not.toBeCalled();

  // 快进几秒 推荐使用
  jest.advanceTimersByTime(3000);

  // 已执行
  expect(fn).toBeCalled();
  expect(fn).toHaveBeenCalledTimes(1);
});
