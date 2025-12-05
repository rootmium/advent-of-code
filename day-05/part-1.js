let input = require("fs").readFileSync("./input.txt", "utf-8")
// let input =`
// 3-5
// 10-14
// 16-20
// 12-18

// 1
// 5
// 8
// 11
// 17
// 32
// `

let lines = input.trim().split("\n")
let ranges = []
let ids = []
let blankPassed = false

lines.forEach(line => {
  if (line === "") {
    blankPassed = true
    return
  }
  if (!blankPassed) ranges.push(line.split("-").map(Number))
  else ids.push(Number(line))
})

let count = 0
ids.forEach(id => {
  for (let range of ranges) {
    if (id >= range[0] && id <= range[1]) {
      count++
      break
    }
  }
})

console.log(count)
