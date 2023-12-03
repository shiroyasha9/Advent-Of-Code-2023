const inputFile = Bun.file("./input.txt");
const inputText = await inputFile.text();
const splittedInput = inputText.split("\n");

let sum = 0;

for (let inputWord of splittedInput) {
  let firstNumber: string | undefined;
  let secondNumber: string | undefined;

  for (let letter of inputWord) {
    if (isNaN(parseInt(letter))) {
      continue;
    }
    if (firstNumber === undefined) {
      firstNumber = letter;
    }
    secondNumber = letter;
  }

  if (firstNumber !== undefined && secondNumber !== undefined) {
    sum += parseInt(firstNumber + secondNumber);
  }
}

console.log(sum); // 55108
