const inputFile = Bun.file("./input.txt");
const inputText = await inputFile.text();
const splittedInput = inputText.split("\n");

type Color = "red" | "green" | "blue";

const cubesMap: Record<Color, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

let possibleGameIdsSum = 0;
let minimumNoOfCubesPresentSum = 0;

const possibleGameIds: number[] = [];

for (let inputLine of splittedInput) {
  const [gameInfo, setsInfo] = inputLine.split(": ");
  const gameNumber = parseInt(gameInfo.split(" ")[1]);
  const sets = setsInfo.split("; ");
  let isPossible = true;

  const fewestCubesCount: Record<Color, number> = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (let set of sets) {
    const cubes = set.split(", ");
    for (let cube of cubes) {
      let [quantity, color] = cube.split(" ") as [string, Color];
      fewestCubesCount[color] = Math.max(
        fewestCubesCount[color],
        parseInt(quantity),
      );
      if (cubesMap[color] < parseInt(quantity)) {
        isPossible = false;
      }
    }
  }
  const power = Object.values(fewestCubesCount).reduce(
    (acc, curr) => acc * curr,
    1,
  );
  minimumNoOfCubesPresentSum += power;

  if (isPossible) {
    possibleGameIds.push(gameNumber);
    possibleGameIdsSum += gameNumber;
  }
}

console.log(possibleGameIdsSum); // 2541
console.log(minimumNoOfCubesPresentSum); //66016
