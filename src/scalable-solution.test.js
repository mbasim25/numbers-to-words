const { main } = require("./scalable-solution");

let originalLog = console.log;

let consoleOutput = [];

beforeEach(() => {
  console.log = jest.fn((...args) => {
    consoleOutput.push(args.join(" "));
  });
});

afterEach(() => {
  console.log = originalLog;
  consoleOutput = [];
});

test("Handles valid input - 0", () => {
  process.argv = ["node", "./src/scalable-solution.js", "0"];
  main();
  expect(consoleOutput).toEqual(["zero"]);
});

test("Handles valid input - 1", () => {
  process.argv = ["node", "./src/scalable-solution.js", "1"];
  main();
  expect(consoleOutput).toEqual(["one"]);
});

test("Handles valid input - 9", () => {
  process.argv = ["node", "./src/scalable-solution.js", "9"];
  main();
  expect(consoleOutput).toEqual(["nine"]);
});

test("Handles valid input - 10", () => {
  process.argv = ["node", "./src/scalable-solution.js", "10"];
  main();
  expect(consoleOutput).toEqual(["ten"]);
});

test("Handles valid input - 11", () => {
  process.argv = ["node", "./src/scalable-solution.js", "11"];
  main();
  expect(consoleOutput).toEqual(["eleven"]);
});

test("Handles valid input - 20", () => {
  process.argv = ["node", "./src/scalable-solution.js", "20"];
  main();
  expect(consoleOutput).toEqual(["twenty"]);
});

test("Handles valid input - 21", () => {
  process.argv = ["node", "./src/scalable-solution.js", "21"];
  main();
  expect(consoleOutput).toEqual(["twenty-one"]);
});

test("Handles valid input - 30", () => {
  process.argv = ["node", "./src/scalable-solution.js", "30"];
  main();
  expect(consoleOutput).toEqual(["thirty"]);
});

test("Handles valid input - 100", () => {
  process.argv = ["node", "./src/scalable-solution.js", "100"];
  main();
  expect(consoleOutput).toEqual(["one hundred"]);
});

test("Handles valid input - 1,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "1000"];
  main();
  expect(consoleOutput).toEqual(["one thousand"]);
});

test("Handles valid input - 10,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "10000"];
  main();
  expect(consoleOutput).toEqual(["ten thousand"]);
});

test("Handles valid input - 100,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "100000"];
  main();
  expect(consoleOutput).toEqual(["one hundred thousand"]);
});

test("Handles valid input - 200,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "200000"];
  main();
  expect(consoleOutput).toEqual(["two hundred thousand"]);
});

test("Handles valid input - 1,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "1000000"];
  main();
  expect(consoleOutput).toEqual(["one million"]);
});

test("Handles valid input - 10,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "10000000"];
  main();
  expect(consoleOutput).toEqual(["ten million"]);
});

test("Handles valid input - 100,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "100000000"];
  main();
  expect(consoleOutput).toEqual(["one hundred million"]);
});

test("Handles valid input - 123,456,789", () => {
  process.argv = ["node", "./src/scalable-solution.js", "123456789"];
  main();
  expect(consoleOutput).toEqual([
    "one hundred and twenty-three million, four hundred and fifty-six thousand, seven hundred and eighty-nine",
  ]);
});

test("Handles valid input - 999,999,999", () => {
  process.argv = ["node", "./src/scalable-solution.js", "999999999"];
  main();
  expect(consoleOutput).toEqual([
    "nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine",
  ]);
});

test("Handles valid input - 1,000,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "1000000000"];
  main();
  expect(consoleOutput).toEqual(["one billion"]);
});

test("Handles valid input - 10,000,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "10000000000"];
  main();
  expect(consoleOutput).toEqual(["ten billion"]);
});

test("Handles valid input - 100,000,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "100000000000"];
  main();
  expect(consoleOutput).toEqual(["one hundred billion"]);
});

test("Handles valid input - 123,456,789,012", () => {
  process.argv = ["node", "./src/scalable-solution.js", "123456789012"];
  main();
  expect(consoleOutput).toEqual([
    "one hundred and twenty-three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand and twelve",
  ]);
});

test("Handles valid input - 999,999,999,999", () => {
  process.argv = ["node", "./src/scalable-solution.js", "999999999999"];
  main();
  expect(consoleOutput).toEqual([
    "nine hundred and ninety-nine billion, nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine",
  ]);
});

test("Handles valid input - 1,000,000,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "1000000000000"];
  main();
  expect(consoleOutput).toEqual(["one trillion"]);
});

test("Handles valid input - 1,000,000,000,000,000", () => {
  process.argv = ["node", "./src/scalable-solution.js", "1000000000000000"];
  main();
  expect(consoleOutput).toEqual(["one quadrillion"]);
});
