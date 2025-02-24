function capitalize(str) {
    let arrayStr = str.split('')
    const capitalizedFirstLetter = arrayStr[0].toUpperCase()
    arrayStr.shift()
    let combinedStr = arrayStr.join('')
    return capitalizedFirstLetter + combinedStr
}

module.exports = capitalize