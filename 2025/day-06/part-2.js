import * as fs from "node:fs"
let input = fs.readFileSync("./input.txt", "utf-8")

let lines = input.trim().split("\n")

let bigArray = []
for (let c = lines[0].length - 1; c >= 0; c--) {
    let num = ""
    let op = ""
    
    for (let r = 0; r < lines.length; r++) {
        let cur = lines[r][c]

        if (cur > 0 && cur < 10) {
            num += lines[r][c]
        } else if (cur === "*" || cur === "+") {
            op = cur
        }
    }
    if (num !== "") bigArray.push(Number(num))
    if (op === "*" || op === "+") bigArray.push(op)

}

let total = 0
let i = 0;
while (i < bigArray.length) {
    let smallArray = []
    let op = ""
    for (let j = i; j < bigArray.length; j++) {
        let cur = bigArray[j]
        if (cur === "+" || cur === "*") {
            op = cur
            i = j + 1
            break
        } else {
            smallArray.push(cur)
        }
    }

    if (op === "*") {
        let acc = 1
        for (let a = 0; a < smallArray.length; a++) {
            acc *= smallArray[a]
        }
        total += acc
    } else if (op === "+") {
        let acc = 0
        for (let b = 0; b < smallArray.length; b++) {
            acc += smallArray[b]
        }
        total += acc
    }
}
console.log(total)
