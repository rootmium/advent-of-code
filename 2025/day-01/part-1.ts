const array = (await Bun.file("./input.txt").text()).split("\n")
array.pop()
const smallArray = array

const initialValue = 50
let result = initialValue
let zeroCount = 0

array.forEach((text) => {
  let direction = text[0]
  let turns = Number.parseInt(text.slice(1))

  if (direction === "L") {
    turns = -turns
  }
  result += turns
  result = result % 100

  if (result === 0) {
    zeroCount += 1
  }
})

console.log(result)
console.log(zeroCount)
