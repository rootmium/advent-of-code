import * as fs from "node:fs"
let input = fs.readFileSync("./input.txt", "utf-8")
// let input =`
// 3-5
// 10-14
// 16-20
// 12-18

// 1
// 5
// 8
// 11
// 17
// 32
// `

// 3-5   3-5   3-5   3-5
// 10-14 10-14 10-18 10-20
// 16-20 12-18 16-20
// 12-18 16-20

// 3-5, 6-8, 7-10, 12-18
// 3-10, 12-18
// if 6 <= 5 + 1

let lines = input.trim().split("\n")
let ranges = []

for (let line of lines) {
    if (line === "") break
    ranges.push(line.split("-").map(Number))
}

ranges.sort((a, b) => a[0] - b[0])

let merged = []
let i = 0;
while (i < ranges.length) {
    let L = ranges[i][0]
    let R = ranges[i][1]
    // console.log(`${L} - ${R}`)
    
    let j = i + 1
    while (j < ranges.length) {
        let l = ranges[j][0]
        let r = ranges[j][1]

        if (l <= R + 1) {
            if (r > R) R = r
            j++
        } else break

    }
    merged.push([L, R])
    i = j
}

let total = merged.reduce((acc, cur) => acc += cur[1] - cur[0] + 1, 0)

console.log(total)

