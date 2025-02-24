const reverseStr = require('./reverse-string')

test('takes a string and returns it with the first character capitalized', () => {
    expect(reverseStr('jancok')).toBe('kocnaj')
})