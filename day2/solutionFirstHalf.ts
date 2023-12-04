const inputFile = Bun.file("./input.txt");
const inputText = await inputFile.text();
const splittedInput = inputText.split("\n");

const cubesMap = {
  red: 12,
  green: 13,
  blue: 14,
};

let sum = 0;

const possibleGameIds: number[] = [];

for (let inputLine of splittedInput) {
  const [gameInfo, setsInfo] = inputLine.split(": ");
  const gameNumber = parseInt(gameInfo.split(" ")[1]);
  const sets = setsInfo.split("; ");
  let isPossible = true;

  for (let set of sets) {
    if (!isPossible) break;
    const cubes = set.split(", ");
    for (let cube of cubes) {
      const [quantity, color] = cube.split(" ");
      if (cubesMap[color as keyof typeof cubesMap] < parseInt(quantity)) {
        isPossible = false;
        break;
      }
    }
  }
  if (isPossible) {
    possibleGameIds.push(gameNumber);
    sum += gameNumber;
  }
}

console.log(sum); // 2541
