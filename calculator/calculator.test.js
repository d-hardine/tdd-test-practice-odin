const calculator = require('./calculator')

test('test addition 1 + 5 to equal 6', () => {
    expect(calculator.add(1, 5)).toBe(6)
})

test('test addition 6 + 3 to equal 9', () => {
    expect(calculator.add(6, 3)).toBe(9)
})

test('test substraction 4 + 5 to equal -1', () => {
    expect(calculator.substract(4, 5)).toBe(-1)
})

test('test substraction 9 + 6 to equal 3', () => {
    expect(calculator.substract(9, 6)).toBe(3)
})

test('test division 12 / 4 to equal 3', () => {
    expect(calculator.divide(12, 4)).toBe(3)
})

test('test division 2 / 4 to equal 0.5', () => {
    expect(calculator.divide(2, 4)).toBe(0.5)
})

test('test multiply 6 * 5 to equal 30', () => {
    expect(calculator.multiply(6, 5)).toBe(30)
})

test('test multiply 2 * 4 to equal 8', () => {
    expect(calculator.multiply(2, 4)).toBe(8)
})