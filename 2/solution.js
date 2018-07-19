let _ = require('lodash')
let fs = require('fs')
let lineReader = require('readline').createInterface({
    input: fs.createReadStream('input')
});
let rows = []
let solution = 0
let safeAllValues = []


console.log(rows.push[2])

function readLines() {
    return new Promise((resolve, reject) => {
        lineReader.on('line', function (line) {
            //console.log('Line from file:', line);
            rows.push(line)
            resolve(rows)
        });
    })


}

readLines().then(function (res) {
    for (let i = 0; i < res.length; i++) {
        let lineArray = []
       lineArray = createArrayFromLine(res[i])
        let minMax = getMinAndMaxFromLine(lineArray)
        calcDifference(minMax)
    }
    displaySolution()

})

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