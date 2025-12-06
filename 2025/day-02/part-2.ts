const numbers = await Bun.file("./input.txt").text()

const array = numbers.split(',')

let total = 0

const dupOrNot = (num) => {
  let strNum = num.toString()

  for (let k = 1; k <= strNum.length / 2; k++) {
    if (strNum.length % k === 0) {
      let pattern = strNum.slice(0, k)
      let expected = pattern.repeat(strNum.length / k)

      if (expected === strNum) {
        return true
      }
    }
  }
  return false
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
