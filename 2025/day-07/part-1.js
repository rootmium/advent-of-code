import * as fs from "node:fs"
let input = fs.readFileSync("./input.txt", "utf-8")

let lines = []
input.trim().split("\n").forEach(line => {
    if (line.indexOf("^") >= 0 || line.indexOf("S") >= 0) lines.push(line)
})

let currentLine = [lines[0].indexOf("S")]

let count = 0
for (let r = 1; r < lines.length; r++) {
    let nextLine = []

    for (let i = 0; i < currentLine.length; i++) {
        let c = currentLine[i]
        if (lines[r][c] === "^") {
            count++
            nextLine.push(c - 1)
            nextLine.push(c + 1)
        } else {
            nextLine.push(c)
        }
    }
    currentLine = [...new Set(nextLine)]
}
console.log(count)
