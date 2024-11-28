import { strictEqual } from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', () => {
  it('should return rounded addition of 2.4, 3.9', () => {
    strictEqual(calculateNumber(2.4, 3.9), 6)
  })
  it('calculateNumber(1, 3)', () => {
    strictEqual(calculateNumber(1, 3), 4)
  })
  it('calculateNumber(1, 3.7)', () => {
    strictEqual(calculateNumber(1, 3.7), 5)
  })
  it ('calculateNumber(1.5, 3.7)', () => {
    strictEqual(calculateNumber(1.5, 3.7), 6)
  })
  it('calculateNumber(0.5, -7)', () => {
    strictEqual(calculateNumber(0.5, -7), -6)
  })
  it('calculateNumber(-1, -1)', () => {
    strictEqual(calculateNumber(-1, 1), 0)
  })
  it('calculateNumber(0, 0)', () => {
    strictEqual(calculateNumber(0, 0), 0)
  })
  it('calculateNumber(0, "a")', () => {
    strictEqual(calculateNumber(0, 'a'), NaN)
  })
  it('calculateNumber(1.5, "1")', () => {
    strictEqual(calculateNumber(1.5, '1'), 3)
  })
  it('calculateNumber("-7", "1")', () => {
    strictEqual(calculateNumber('-7', '1'), -6)
  })
  it('calculateNumber("-5.6", "1000")', () => {
    strictEqual(calculateNumber('-5.6', '1000'), 994)
  })
  it('calculateNumber("-5000", "-111111")', () => {
    strictEqual(calculateNumber('-5000', '-111111'), -116111)
  })
})