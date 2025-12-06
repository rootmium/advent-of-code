import * as fs from "node:fs"
let input = fs.readFileSync("./input.txt", "utf-8")

let lines = input.trim().split("\n").map(line => line.trim().split(/\s+/))

let total = 0

for (let c = 0; c < lines[0].length; c++) {
    let columns = []
    
    for (let r = 0; r < lines.length; r++) {
        columns.push(lines[r][c])
    }

    if (columns[columns.length - 1] === "*") {
        let acc = 1
        for (let i = 0; i < columns.length - 1; i++) {
            acc *= Number([columns[i]])
        }
        total += acc
    } else {
        let acc = 0
        for (let i = 0; i < columns.length - 1; i++) {
            acc += Number([columns[i]])
        }
        total += acc
    }
}

console.log(total)
