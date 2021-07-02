const iwanttocountfromone = require("./index");

test("5 is 4", () => {
  expect(iwanttocountfromone(5)).toBe(4);
});

test("first item is at 1", () => {
  list = ["a", "b", "c"];
  expect(list[iwanttocountfromone(1)]).toBe(list[0]);
});

test("0 throws error", () => {
  expect(() => {
    iwanttocountfromone(0);
  }).toThrow();
});
