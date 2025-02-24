const caesarChiper = require('./caesar-chiper')

test('takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarChiper('HeLLo', 3)).toEqual('KhOOr')
})

test('takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarChiper('EmotionalDamage', 3)).toEqual('HprwlrqdoGdpdjh')
})