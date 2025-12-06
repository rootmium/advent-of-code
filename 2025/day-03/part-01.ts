const strBatteryBanks = await Bun.file("./input.txt").text()

const batteryBanks = (strBatteryBanks.trim()).split("\n")
let total :number = 0

batteryBanks.forEach((bank :string) => {
  let highest :number = 0;

  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      const current = Number(bank[i] + bank[j])

      if (current > highest) {
        highest = current
      }
    }
  }
  total += highest
})

console.log(total)
