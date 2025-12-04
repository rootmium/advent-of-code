const inputFile = ((await Bun.file("./input.txt").text()).trim()).split("\n")

let total = 0

inputFile.forEach((input) => {
  const digits = input.split("")
  const array = []

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];

    while (array.length > 0 && array[array.length - 1] < digit && array.length - 1 + (digits.length - i) >= 12) {
      array.pop()
    }

    if (array.length < 12) {
      array.push(digit)
    }

  }

  total += Number(array.join(""))
})

console.log(total)
