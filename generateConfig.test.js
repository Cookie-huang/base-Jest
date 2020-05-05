import { generateConfig, generateAnotherConfig } from "./generateConfig";

test.only("快照1", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "port": "8080",
      "server": "http://localhost",
      "time": Any<Date>,
      "version": 1,
    }
  `
  );
});

test.only("快照2", () => {
  expect(generateAnotherConfig()).toMatchSnapshot({
    // time: jest.Any(Date)
  });
});
