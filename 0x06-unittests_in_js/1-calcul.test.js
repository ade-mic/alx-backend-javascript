const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUM function', () => {
  it('should return rounded Addition of 2.4, 3.9', () => {
    assert.strictEqual(calculateNumber('SUM', 2.4, 3.9), 6)
  })
  it('calculateNumber(1, 3)', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4)
  })
  it('calculateNumber(1, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5)
  })
  it ('calculateNumber(1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6)
  })
  it('calculateNumber(0.5, -7)', () => {
    assert.strictEqual(calculateNumber('SUM', 0.5, -7), -6)
  })
  it('calculateNumber(-1, -1)', () => {
    assert.strictEqual(calculateNumber('SUM', -1, 1), 0)
  })
  it('calculateNumber(0, 0)', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0)
  })
  it('calculateNumber(0, "a")', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 'a'), NaN)
  })
  it('calculateNumber(1.5, "1")', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, '1'), 3)
  })
  it('calculateNumber("-7", "1")', () => {
    assert.strictEqual(calculateNumber('SUM', '-7', '1'), -6)
  })
  it('calculateNumber("-5.6", "1000")', () => {
    assert.strictEqual(calculateNumber('SUM', '-5.6', '1000'), 994)
  })
  it('calculateNumber("-5000", "-111111")', () => {
    assert.strictEqual(calculateNumber('SUM', '-5000', '-111111'), -116111)
  })
})

describe('SUBSTRACT function', () => {
    it('should return rounded SUMition of 2.4, 3.9', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 3.9), -2)
    })
    it('calculateNumber(1, 3)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2)
    })
    it('calculateNumber(1, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3)
    })
    it ('calculateNumber(1.5, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2)
    })
    it('calculateNumber(0.5, -7)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, -7), 8)
    })
    it('calculateNumber(-1, -1)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 1), -2)
    })
    it('calculateNumber(0, 0)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0)
    })
    it('calculateNumber(0, "a")', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 'a'), NaN)
    })
    it('calculateNumber(1.5, "1")', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, '1'), 1)
    })
    it('calculateNumber("-7", "1")', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '-7', '1'), -8)
    })
    it('calculateNumber("-5.6", "1000")', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '-5.6', '1000'), -1006)
    })
    it('calculateNumber("-5000", "-111111")', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '-5000', '-111111'), 106111)
    })
})

describe('DIVIDE function', () => {
    it('should return rounded SUMition of 2.4, 3.9', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 3.9), 0.5)
    })
    it('calculateNumber(1, 3)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333)
    })
    it('calculateNumber(1, 3.7)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25)
    })
    it ('calculateNumber(1.5, 3.7)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5)
    })
    it('calculateNumber(0.5, -7)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.5, -7), -0.14285714285714285)
    })
    it('calculateNumber(-1, -1)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1)
    })
    it('calculateNumber(0, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error')
    })
    it('calculateNumber(0, "a")', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 'a'), NaN)
    })
    it('calculateNumber(1.5, "1")', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, '1'), 2)
    })
    it('calculateNumber("-7", "1")', () => {
      assert.strictEqual(calculateNumber('DIVIDE', '-7', '1'), -7)
    })
    it('calculateNumber("-5.6", "1000")', () => {
      assert.strictEqual(calculateNumber('DIVIDE', '-5.6', '1000'), -0.006)
    })
    it('calculateNumber("-5000", "-111111")', () => {
      assert.strictEqual(calculateNumber('DIVIDE', '-5000', '-111111'), 0.045000045000045)
    })
    it("calculateNumber('DIVIDE', '-7', '0')", () => {
        assert.strictEqual(calculateNumber('DIVIDE', '-7', '0'), 'Error')
    })
})

describe('Unknown DIVIDEE function', () => {
    it('should return rounded SUMition of 2.4, 3.9', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 2.4, 3.9), undefined)
    })
    it('calculateNumber(1, 3)', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 1, 3), undefined)
    })
    it('calculateNumber(1, 3.7)', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 1, 3.7), undefined)
    })
    it ('calculateNumber(1.5, 3.7)', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 1.5, 3.7), undefined)
    })
    it('calculateNumber(0.5, -7)', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 0.5, -7), undefined)
    })
    it('calculateNumber(-1, -1)', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', -1, 1), undefined)
    })
    it('calculateNumber(0, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 0, 0), undefined)
    })
    it('calculateNumber(0, "a")', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 0, 'a'), undefined)
    })
    it('calculateNumber(1.5, "1")', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', 1.5, '1'), undefined)
    })
    it('calculateNumber("-7", "1")', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', '-7', '1'), undefined)
    })
    it('calculateNumber("-5.6", "1000")', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', '-5.6', '1000'), undefined)
    })
    it('calculateNumber("-5000", "-111111")', () => {
      assert.strictEqual(calculateNumber('DIVIDEE', '-5000', '-111111'), undefined)
    })
  })

  describe('calculateNumber', () => {
    describe('when type is DIVIDE', () => {
      it('it round the first argument', () => {
          assert.equal(calculateNumber('DIVIDE', 10.0, 2), 5);
          assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
          assert.equal(calculateNumber('DIVIDE', 10.7, 2), 5.5);
      });
      
      it('it round the second argument', () => {
          assert.equal(calculateNumber('DIVIDE', 10, 1.0), 10);
          assert.equal(calculateNumber('DIVIDE', 10, 1.3), 10);
          assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
      });
      
      it('it should return the right number', () => {
          assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
          assert.equal(calculateNumber('DIVIDE', 10, 1.2), 10);
          assert.equal(calculateNumber('DIVIDE', 10.3, 1.3), 10);
          assert.equal(calculateNumber('DIVIDE', 10.7, 1.2), 11);
          assert.equal(calculateNumber('DIVIDE', 10.3, 1.8), 5);
          assert.equal(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
      });
  
      it('it should return Error if b is equal to 0', () => {
          assert.equal(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
          assert.equal(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
          assert.equal(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
          assert.equal(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
      });
    });
  });

  