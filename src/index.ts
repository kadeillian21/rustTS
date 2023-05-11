import fs from "fs"

const list = [1, 2, 3]
const addOneList = list.map(number => number +1)
console.log(addOneList)

fs.readFileSync("lines").toString().split("\n").forEach(line => console.log(line))