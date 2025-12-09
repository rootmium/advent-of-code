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

    let isValid = true;
    for (let k = 0; k < n; k++) {
      let red1 = points[k];
      let red2 = points[k + 1];
      if (k + 1 === n) red2 = points[0];

      if (red1.x === red2.x) {
        let edgeX = red1.x;
        let edgeY1 = Math.min(red1.y, red2.y);
        let edgeY2 = Math.max(red1.y, red2.y);

        if (edgeX > minX && edgeX < maxX) {
          let overlapStart = Math.max(minY, edgeY1);
          let overlapEnd = Math.min(maxY, edgeY2);

          if (overlapStart < overlapEnd) {
            isValid = false;
            break;
          }
        }
      } else if (red1.y === red2.y) {
        let edgeY = red1.y;
        let edgeX1 = Math.min(red1.x, red2.x);
        let edgeX2 = Math.max(red1.x, red2.x);

        if (edgeY > minY && edgeY < maxY) {
          let overlapStart = Math.max(minX, edgeX1);
          let overlapEnd = Math.min(maxX, edgeX2);

          if (overlapStart < overlapEnd) {
            isValid = false;
            break;
          }
        }
      }
    }

    if (!isValid) continue;

    if (area > maxArea) maxArea = area;
  }
}

console.log(maxArea);
