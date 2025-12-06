const batteryBanks = ((await Bun.file("./input.txt").text()).trim()).split("\n")

let total = 0

batteryBanks.forEach((bank) => {
  let offset = 0
  let theNumber = ''
  let remaining = 11

  for (let i = 0; i < 12; i++) {
    let r = 0;
    for (let i = offset; i < bank.length - remaining; i++) {
      if (Number(bank[i]) > r) {
        r = Number(bank[i])
        offset = i + 1
      }
    }

    theNumber += r
    remaining--
  }

  total += Number(theNumber)
})

console.log(total)
