import * as fs from "node:fs";
let input = fs.readFileSync("./input.txt", "utf-8");

let machines = input.trim().split("\n");

let total = 0;
machines.forEach((machine) => {
  let parts = machine.split(" ");
  let lights = parts[0].replace("[", "").replace("]", "");
  let buttons = parts
    .splice(1, parts.length - 2)
    .map((button) =>
      button.replace("(", "").replace(")", "").split(",").map(Number),
    );

  let allButtons = [[]];
  for (let b of buttons) {
    let len = allButtons.length;
    for (let i = 0; i < len; i++) {
      let temp = [...allButtons[i]];
      temp.push(b);
      allButtons.push(temp);
    }
  }

  let minLength = 999;
  allButtons.forEach((subSet) => {
    let init = Array(lights.length).fill(0);
    let result = "";

    subSet.forEach((set) => {
      set.forEach((num) => {
        init[num]++;
      });
    });

    for (let i = 0; i < init.length; i++) {
      result += init[i] % 2 === 0 ? "." : "#";
    }

    if (result === lights) {
      if (subSet.length < minLength) minLength = subSet.length;
    }
  });
  total += minLength;
});
console.log(total);
