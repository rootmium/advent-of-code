import * as fs from "node:fs";
let input = fs.readFileSync("./input.txt", "utf-8");

let lines = [];
input
  .trim()
  .split("\n")
  .map((line) => {
    if (line.includes("x")) {
      let [op, num] = line.split(": ");
      lines.push([
        [...op.split("x").map(Number)],
        [...num.split(" ").map(Number)],
      ]);
    }
  });

let count = 0;
lines.forEach((line) => {
  let area = line[0].reduce((acc, cur) => (acc *= cur), 1);
  let total = line[1].reduce((acc, cur) => (acc += cur), 0);

  if (area >= total * 7) count++;
});

console.log(count);
