function analyzeArray(arr) {
    const sum = arr.reduce((prev, current) => prev + current)
    const average = sum / arr.length    
    const minimum = Math.min(...arr)
    const maximum = Math.max(...arr)
    const length = arr.length

    return {
        average: average,
        min: minimum,
        max: maximum,
        length: length
    }
}

module.exports = analyzeArray