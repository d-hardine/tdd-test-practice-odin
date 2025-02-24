function reverseStr(str) {
    let arrayStr = str.split('')
    const strLength = arrayStr.length //because pop() function decrease the arrayStr.length
    let reversedArr = []
    for(let i = 0; i < strLength; i++) {
        reversedArr[i] = arrayStr.pop()
    }

    return reversedArr.join('')
}

module.exports = reverseStr