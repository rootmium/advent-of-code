import * as fs from "node:fs";
let input = fs.readFileSync("./input.txt", "utf-8");

// [0, 1, 9587934]
// {p: 0, q: 1, distance: 9587934]
// [0, 2, 9587934]
// [0, 3, 9587934]
// [0, 4, 9587934]

let lines = input
  .trim()
  .split("\n")
  .map((line) => line.split(",").map(Number));

let pairs = [];
for (let p = 0; p < lines.length; p++) {
  let [px, py, pz] = lines[p];

  for (let q = p + 1; q < lines.length; q++) {
    let [qx, qy, qz] = lines[q];
    let dx = px - qx;
    let dy = py - qy;
    let dz = pz - qz;
    let distance = dx * dx + dy * dy + dz * dz;

    pairs.push({ p, q, distance });
  }
}

pairs.sort((a, b) => a.distance - b.distance);

let connections = [];
// 7 --- 0 --- 19 --- 14, [8, 2, 13, 17, 18]
// 9 --- 12, 11 --- 16
// [[0, 19, 7, 14], [2, 13, 8, 18, 17], [9, 12], [11, 16]]

for (let i = 0; i < pairs.length; i++) {
  let p = pairs[i].p;
  let q = pairs[i].q;

  let indexP = -1;
  let indexQ = -1;

  for (let j = 0; j < connections.length; j++) {
    if (connections[j].includes(p)) indexP = j;
    if (connections[j].includes(q)) indexQ = j;
  }

  if (indexP === -1 && indexQ === -1) {
    connections.push([p, q]);
  } else if (indexP !== -1 && indexQ === -1) {
    connections[indexP].push(q);
  } else if (indexP === -1 && indexQ !== -1) {
    connections[indexQ].push(p);
  } else if (indexP !== indexQ) {
    let a1 = connections[indexP];
    let a2 = connections[indexQ];
    connections[indexP] = [...a1, ...a2];
    connections.splice(indexQ, 1);
  }

  if (connections[0].length === lines.length) {
    console.log(lines[p][0] * lines[q][0]);
    break;
  }
}
