import * as fs from "node:fs";
let input = fs.readFileSync("./input.txt", "utf-8");

let connections = {};
input
  .trim()
  .split("\n")
  .map((line) => {
    let [device, output] = line.split(": ");
    connections[device] = output.split(" ");
  });

let getPath = (device) => {
  if (device === "out") return 1;

  let totalPaths = 0;
  for (let output of connections[device]) {
    totalPaths += getPath(output);
  }

  return totalPaths;
};

console.log(getPath("you"));
