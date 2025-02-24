const capitalize = require('./capitalize')

test('takes a string ("hello") and returns it with the first character capitalized ("Hello")', () => {
    expect(capitalize('hello')).toBe('Hello')
})

test('takes a string ("world") and returns it with the first character capitalized ("World")', () => {
    expect(capitalize('world')).toBe('World')
})