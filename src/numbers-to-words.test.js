const { numberToWords } = require("./numbers-to-words");

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

test("Handles valid input", () => {
  process.argv = ["node", "numbers-to-words.js", "1"];
  numberToWords();
  expect(consoleOutput).toEqual(["one"]);
});

test("Handles missing input", () => {
  process.argv = ["node", "numbers-to-words.js"];
  numberToWords();
  expect(consoleOutput).toEqual(["Please provide a number to convert."]);
});

test("Handles invalid input (string)", () => {
  process.argv = ["node", "numbers-to-words", "abc"];
  numberToWords();
  expect(consoleOutput).toEqual(["Please provide a valid integer."]);
});

test("Handles invalid input (float)", () => {
  process.argv = ["node", "numbers-to-words.js", "12.5"];
  numberToWords();
  expect(consoleOutput).toEqual(["Please provide a valid integer."]);
});

test("Handles invalid input (mixed number & string)", () => {
  process.argv = ["node", "numbers-to-words.js", "a1"];
  numberToWords();
  expect(consoleOutput).toEqual(["Please provide a valid integer."]);
});

test("Handles invalid input (negative value)", () => {
  process.argv = ["node", "numbers-to-words.js", "-1"];
  numberToWords();
  expect(consoleOutput).toEqual(["Number out of range 0-100000."]);
});

test("Handles invalid input (greater than the maximum valid value)", () => {
  process.argv = ["node", "numbers-to-words.js", "100001"];
  numberToWords();
  expect(consoleOutput).toEqual(["Number out of range 0-100000."]);
});

test("Handles numbers with leading zeros", () => {
  process.argv = ["node", "numbers-to-words.js", "00001"];
  numberToWords();
  expect(consoleOutput).toEqual(["one"]);
});

// Original task test cases
const testCases = [
  { number: "52", word: "fifty-two" },
  { number: "1000", word: "one thousand" },
  { number: "101", word: "one hundred and one" },
  { number: "352", word: "three hundred and fifty-two" },
  { number: "12300", word: "twelve thousand, three hundred" },
  { number: "12055", word: "twelve thousand and fifty-five" },
  { number: "12345", word: "twelve thousand, three hundred and forty-five" },
];

for (let t of testCases) {
  test(`Handles test case ${t.number}`, () => {
    process.argv = ["node", "numbers-to-words.js", t.number];
    numberToWords();
    expect(consoleOutput).toEqual([t.word]);
  });
}
