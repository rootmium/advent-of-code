const array = (await Bun.file("./input.txt").text()).split("\n")
array.pop()

const initialValue = 50
let result = initialValue
let zeroCount = 0

array.forEach((line) => {
  let direction = line[0]
  let turns = Number.parseInt(line.slice(1))

  for (let i = 0; i < turns; i++) {
    if (direction === "L") {
      if (result - 1 < 0) {
        result = 99
      } else {
        result -= 1
      }
    } else {
      if (result + 1 > 99) {
        result = 0
      } else {
        result += 1
      }
    }

    if (result === 0) {
      zeroCount += 1
    }
  }

})

console.log(zeroCount)
