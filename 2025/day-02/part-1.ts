const numbers = await Bun.file("./input.txt").text()

const array = numbers.split(',')

let total = 0

const dupOrNot = (num) => {
  let strNum = num.toString()
  let half = strNum.length / 2
  let firstHalf = strNum.slice(0, half)
  let secondHalf = strNum.slice(half)

  if (firstHalf === secondHalf) {
    return true
  } else {
    return false
  }
}

array.forEach((range) => {
  let rangeParts = range.split('-')
  let firstNumber = Number(rangeParts[0])
  let secondNumber = Number(rangeParts[1])

  for (let current = firstNumber; current <= secondNumber; current++) {
    let isTrue = dupOrNot(current)
    if (isTrue) {
      total += current
    }
  }
})

console.log(total)
