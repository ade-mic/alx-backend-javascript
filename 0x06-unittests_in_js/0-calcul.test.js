const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1.4 and 2.6', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when inputs are 1.5 and 2.5', function() {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return -1 when inputs are -1.4 and -0.6', function() {
    assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
  });

  it('should return 0 when inputs are 0.1 and -0.1', function() {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });
});
