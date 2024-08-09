function sum(a: number, b: number): number {
  return a + b
}
describe('sum function', () => {
  test('should return the correct sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('should return a negative number when summing negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3)
  })

  test('should return 0 when summing 0 and 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
})
