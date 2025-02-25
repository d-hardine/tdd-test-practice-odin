const analyzeArray = require("./analize-array")

test('find the average of the array of numbers', () => {
    function average(arr) {
        let sum = arr.reduce((prev, current) => prev + current)
        return sum / arr.length
    }
    expect(average([3,4,6,7])).toBe(5)
})

test('find the minimum of the array of numbers', () => {
    function minimum(arr) {
        return Math.min(...arr)
    }
    expect(minimum([3,4,6,7])).toBe(3)
})

test('find the maximum of the array of numbers', () => {
    function maximum(arr) {
        return Math.max(...arr)
    }
    expect(maximum([3,4,6,7])).toBe(7)
})

test('analyze an array and return object with average, max, min, and length', () => {
    expect(analyzeArray([3,4,6,7])).toEqual({
        average: 5,
        min:3,
        max:7,
        length:4
    })
})

test('analyze an array and return object with average, max, min, and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min:1,
        max:8,
        length:6
    })
})