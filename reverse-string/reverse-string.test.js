const reverseStr = require('./reverse-string')

test('takes a string ("hello") and returns it returns it reversed ("olleh")', () => {
    expect(reverseStr('hello')).toBe('olleh')
})

test('takes a string ("world") and returns it returns it reversed ("dlrow")', () => {
    expect(reverseStr('world')).toBe('dlrow')
})