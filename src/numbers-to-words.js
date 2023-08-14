const numbersMap = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const numberToWords = () => {
  // Validation
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Please provide a number to convert.");
    return;
  }

  if (isNaN(args[0]) || args[0] % 1 !== 0) {
    console.log("Please provide a valid integer.");
    return;
  }

  let inputNumber = parseInt(args[0]);

  if (inputNumber < 0 || inputNumber > 100000) {
    console.log("Number out of range 0-100000.");
    return;
  }

  // Convert numbers to words
  const convert = (number) => {
    if (numbersMap[number] !== undefined) {
      return numbersMap[number];
    }

    let word = "";

    if (number >= 1000) {
      word += convert([Math.floor(number / 1000)]) + " thousand";
      number %= 1000;
    }

    if (number >= 100) {
      if (word !== "") word += ", ";
      word += convert([Math.floor(number / 100)]) + " hundred";

      number %= 100;
    }

    if (number > 0) {
      if (word !== "") word += " and ";

      if (number < 20) word += numbersMap[number];
      else {
        word += numbersMap[Math.floor(number / 10) * 10];

        if (number % 10 > 0) {
          word += "-" + numbersMap[number % 10];
        }
      }
    }
    return word;
  };

  const results = convert(inputNumber);

  console.log(results);
};

numberToWords();

module.exports = { numberToWords };
