let _ = require('lodash')
let fs = require('fs')
let lineReader = require('readline').createInterface({
    input: fs.createReadStream('input')
});
let rows = []
let solution = 0
let safeAllValues = []



function readLines() {
    rows= fs.readFileSync('input', 'utf-8')
        .split('\n')
}

readLines()
    for (let i = 0; i < rows.length; i++) {
        let lineArray = []
       lineArray = createArrayFromLine(rows[i])
        let minMax = getMinAndMaxFromLine(lineArray)
        calcDifference(minMax)
    }
    displaySolution()



function createArrayFromLine(line) {
    let arrayFromLine = line.replace(/\t/g, ',').split(',')
    for (let i = 0; i < arrayFromLine.length; i++) {
        arrayFromLine[i] = parseInt(arrayFromLine[i])
    }
    console.log(arrayFromLine);
    return arrayFromLine
}

function getMinAndMaxFromLine(lineArray) {
    let fromLine = {}
    fromLine.max = _.max(lineArray)
    fromLine.min = _.min(lineArray)
    return fromLine
}
function calcDifference(fromLine) {
    fromLine.res = fromLine.max- fromLine.min
    solution+=(fromLine.max-fromLine.min)
    safeAllValues.push(fromLine)
}
function displaySolution() {
    console.log("your Answer is: ",solution)
    console.log("for debugging here are the single values--> max,min,res\t", safeAllValues);
}