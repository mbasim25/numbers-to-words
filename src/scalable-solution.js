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

const milestones = [
  { name: "quadrillion", value: 1000000000000000 },
  { name: "trillion", value: 1000000000000 },
  { name: "billion", value: 1000000000 },
  { name: "million", value: 1000000 },
  { name: "thousand", value: 1000 },
  { name: "hundred", value: 100 },
];

const numberToWords = (number, startMilestoneIndex = 0) => {
  if (numbersMap[number] !== undefined) {
    return numbersMap[number];
  }

  let words = "";

  for (let i = startMilestoneIndex; i < milestones.length; i++) {
    const milestone = milestones[i];
    console.log(number, milestone);
    if (number >= milestone.value) {
      const quotient = Math.floor(number / milestone.value);
      number %= milestone.value;

      if (quotient > 0) {
        if (words.length > 0) {
          words += ", ";
        }

        words += `${numberToWords(quotient, i + 1)} ${milestone.name}`;
      }
    }
  }

  if (number > 0) {
    if (words.length > 0 && number < 100) {
      words += " and ";
    }

    if (number < 20) {
      words += numbersMap[number];
    } else {
      words += numbersMap[Math.floor(number / 10) * 10];
      if (number % 10 > 0) {
        words += `-${numbersMap[number % 10]}`;
      }
    }
  }

  return words;
};

const main = () => {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Please provide a number to convert.");
    return;
  }

  if (isNaN(args[0]) || args[0] % 1 !== 0) {
    console.log("Please provide a valid number.");
    return;
  }

  const inputNumber = parseInt(args[0]);

  if (inputNumber < 0 || inputNumber > milestones[0].value) {
    console.log(`Number out of range 0-${milestones[0].value}.`);
    return;
  }

  const words = numberToWords(inputNumber);
  console.log(words);
};

main();

module.exports = { main };
