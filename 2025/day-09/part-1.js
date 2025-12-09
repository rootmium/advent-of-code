import * as fs from "node:fs";
let input = fs.readFileSync("./input.txt", "utf-8");

let lines = input
  .trim()
  .split("\n")
  .map((line) => line.split(",").map(Number));

let points = [];
lines.map((line) => {
  points.push({ x: line[0], y: line[1] });
});

let n = points.length;

let maxArea = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let p1 = points[i];
    let p2 = points[j];

    let minX = Math.min(p1.x, p2.x);
    let maxX = Math.max(p1.x, p2.x);
    let minY = Math.min(p1.y, p2.y);
    let maxY = Math.max(p1.y, p2.y);

    let width = maxX - minX + 1;
    let height = maxY - minY + 1;

    let area = width * height;

    if (area > maxArea) maxArea = area;
  }
}

console.log(maxArea);
