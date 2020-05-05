import { fetchData } from "./fetchData";

test("获取数据", async () => {
  //   const { data } = await fetchData();
  //   expect(data).toEqual({
  //     success: true
  //   });

  //   return fetchData().then(res => {
  //     expect(res.data).toEqual({
  //       success: true
  //     });
  //   });

  //   return expect(
  //     fetchData().then(res => {
  //       return res.data;
  //     })
  //   ).resolves.toEqual({
  //     success: true
  //   });

  //   return expect(fetchData()).resolves.toMatchObject({
  //     data: {
  //       success: true
  //     }
  //   });

  //   请确保添加 expect.assertions 来验证一定数量的断言被调用。 否则一个fulfilled态的 Promise 不会让测试失败
  //   expect.assertions(1);
  //   return fetchData().catch(e => {
  //     expect(e.toString().indexOf("404") > -1).toBe(true);
  //   });

  return expect(fetchData()).rejects.toThrow();

  //   return expect(
  //     fetchData().catch(e => {
  //       return e.toString().indexOf("404") > -1;
  //     })
  //   ).resolves.toBe(true);
});
