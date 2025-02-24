function caesarChiper(str, key) {
    let arrayStr = str.split('')
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('')
    const lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.toLowerCase().split('')

    //shift the alphabet according to the key
    while(key > 26)
        key -= 26

    let newUpperCase = []
    let newLowerCase = []
    for(let i = 0; i < upperCase.length; i++) {
        if(i + key <= 25) {
            newUpperCase[i] = upperCase[i + key]
            newLowerCase[i] = lowerCase[i + key]
        } else {
            newUpperCase[i] = upperCase[i + key - 26]
            newLowerCase[i] = lowerCase[i + key - 26]
        }
    }

    //case and index check
    let index = []
    let newStr = []
    
    for(let i = 0; i < arrayStr.length; i++) {
        index[i] = lowerCase.indexOf(arrayStr[i].toLowerCase())

        if(arrayStr[i] === arrayStr[i].toLowerCase())
            newStr[i] = newLowerCase[index[i]]
        else
            newStr[i] = newUpperCase[index[i]]
    }
    console.log(arrayStr, newStr)
    return newStr.join('')
}

module.exports = caesarChiper