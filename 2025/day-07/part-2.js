import * as fs from "node:fs"
let input = fs.readFileSync("./input.txt", "utf-8")

// Explanation: Understand the trees below. And you will hopefully solve this.
//     1
//    1 1   
//   1 2 1 
//  1 3 3 1
// 1 4 331 1

//     7  
//    6 8
//   5 7 9
//  4 6 8 10
// 3 5 7 9  11


let lines = []
input.trim().split("\n").forEach(line => {
    if (line.indexOf("^") >= 0 || line.indexOf("S") >= 0) lines.push(line)
})

let currentLine = [lines[0].indexOf("S")]
let timelines = [1]

for (let r = 1; r < lines.length; r++) {
    let nextLine = []
    let nextTimelines = []

    for (let i = 0; i < currentLine.length; i++) {
        let c = currentLine[i]
        let n = timelines[i]
        
        if (lines[r][c] === "^") {
            let L = c - 1
            let index = nextLine.indexOf(L)
            if (index >= 0) nextTimelines[index] += n
            else {
                nextLine.push(L)
                nextTimelines.push(n)
            }
            
            let R = c + 1
            index = nextLine.indexOf(R)
            if (index >= 0) nextTimelines[index] += n
            else {
                nextLine.push(R)
                nextTimelines.push(n)
            }
        } else {
            nextLine.push(c)
            nextTimelines.push(n)
        }
    }
    currentLine = nextLine
    timelines = nextTimelines
}

let total = timelines.reduce((acc, cur) => acc += cur, 0)
console.log(total)
