let input = require("fs").readFileSync("./input.txt", "utf-8")

// let input = `
// ..@@.@@@@.
// @@@.@.@.@@
// @@@@@.@.@@
// @.@@@@..@.
// @@.@@@@.@@
// .@@@@@@@.@
// .@.@.@.@@@
// @.@@@.@@@@
// .@@@@@@@@.
// @.@.@@@.@.
// `

let grid = input.trim().split("\n").map(line => line.split(""))

let total = 0
while(true) {
  let curTotal = total
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] !== "@") continue

      let count = 0
      for (let roffset = -1; roffset <= 1; roffset++) {
        for (let coffset = -1; coffset <= 1; coffset++) {
          if (roffset === 0 && coffset === 0) continue
          
          let nr = r + roffset
          let nc = c + coffset

          if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length) {
            if (grid[nr][nc] === "@"){
              count++
            }
          }
        }
      }
      if (count < 4) {
        grid[r][c] = "."
        total++
      }
    }
  }
  if (curTotal === total) {
    break
  }
}
console.log(total)
