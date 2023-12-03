const inputFile = Bun.file("./input.txt");
const inputText = await inputFile.text();
const splittedInput = inputText.split("\n");

let sum = 0;

const numberMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const numbersInWord = Object.keys(numberMap) as (keyof typeof numberMap)[];

for (let inputWord of splittedInput) {
  let firstNumber: string | undefined;
  let secondNumber: string | undefined;
  let word = "";

  for (let letter of inputWord) {
    if (isNaN(parseInt(letter))) {
      word += letter;
      for (let numberInWord of numbersInWord) {
        if (word.endsWith(numberInWord)) {
          const wordNumber = numberMap[numberInWord];
          if (firstNumber === undefined) {
            firstNumber = wordNumber;
          }
          secondNumber = wordNumber;
        }
      }
    } else {
      if (firstNumber === undefined) {
        firstNumber = letter;
      }
      secondNumber = letter;
    }
  }
  if (firstNumber !== undefined && secondNumber !== undefined) {
    sum += parseInt(firstNumber + secondNumber);
  }
}

console.log(sum); // 56324
