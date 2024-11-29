const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return rounded addition of 2.4, 3.9', () => {
    assert.strictEqual(calculateNumber(2.4, 3.9), 6)
  })
  it('calculateNumber(1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4)
  })
  it('calculateNumber(1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5)
  })
  it ('calculateNumber(1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6)
  })
  it('calculateNumber(0.5, -7)', () => {
    assert.strictEqual(calculateNumber(0.5, -7), -6)
  })
  it('calculateNumber(-1, -1)', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0)
  })
  it('calculateNumber(0, 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0)
  })
  it('calculateNumber(0, "a")', () => {
    assert.strictEqual(calculateNumber(0, 'a'), NaN)
  })
  it('calculateNumber(1.5, "1")', () => {
    assert.strictEqual(calculateNumber(1.5, '1'), 3)
  })
  it('calculateNumber("-7", "1")', () => {
    assert.strictEqual(calculateNumber('-7', '1'), -6)
  })
  it('calculateNumber("-5.6", "1000")', () => {
    assert.strictEqual(calculateNumber('-5.6', '1000'), 994)
  })
  it('calculateNumber("-5000", "-111111")', () => {
    assert.strictEqual(calculateNumber('-5000', '-111111'), -116111)
  })
})

describe('second number rounded', () => {
  it('should return rounded addition of 2.4, 3.9', () => {
    assert.strictEqual(calculateNumber(2.4, 3.9), 6)
  })
  it('calculateNumber(1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4)
  })
  it('calculateNumber(1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5)
  })
  it ('calculateNumber(1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6)
  })
  it('calculateNumber(0.5, -7)', () => {
    assert.strictEqual(calculateNumber(0.5, -7), -6)
  })
  it('calculateNumber(-1, -1)', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0)
  })
  it('calculateNumber(0, 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0)
  })
  it('calculateNumber(0, "a")', () => {
    assert.strictEqual(calculateNumber(0, 'a'), NaN)
  })
  it('calculateNumber(1.5, "1")', () => {
    assert.strictEqual(calculateNumber(1.5, '1'), 3)
  })
  it('calculateNumber("-7", "1")', () => {
    assert.strictEqual(calculateNumber('-7', '1'), -6)
  })
  it('calculateNumber("-5.6", "1000")', () => {
    assert.strictEqual(calculateNumber('-5.6', '1000'), 994)
  })
  it('calculateNumber("-5000", "-111111")', () => {
    assert.strictEqual(calculateNumber('-5000', '-111111'), -116111)
  })
})