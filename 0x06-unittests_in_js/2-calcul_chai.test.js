const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { assert, expect } = chai;

describe('SUM function', () => {
  it('should return rounded Addition of 2.4, 3.9', () => {
    expect(calculateNumber('SUM', 2.4, 3.9)).to.equal(6);
  })
  it('calculateNumber(1, 3)', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4)
  })
  it('calculateNumber(1, 3.7)', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5)
  })
  it ('calculateNumber(1.5, 3.7)', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  })
  it('calculateNumber(0.5, -7)', () => {
    expect(calculateNumber('SUM', 0.5, -7)).to.equal(-6)
  })
  it('calculateNumber(-1, -1)', () => {
    expect(calculateNumber('SUM', -1, 1)).to.equal(0)
  })
  it('calculateNumber(0, 0)', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0)
  })
  it('calculateNumber(0, "a")', () => {
    expect(calculateNumber('SUM', 0, 'a')).to.be.NaN
  })
  it('calculateNumber(1.5, "1")', () => {
    expect(calculateNumber('SUM', 1.5, '1')).to.equal(3)
  })
  it('calculateNumber("-7", "1")', () => {
    expect(calculateNumber('SUM', '-7', '1')).to.equal(-6)
  })
  it('calculateNumber("-5.6", "1000")', () => {
    expect(calculateNumber('SUM', '-5.6', '1000')).to.equal(994)
  })
  it('calculateNumber("-5000", "-111111")', () => {
    expect(calculateNumber('SUM', '-5000', '-111111')).to.equal(-116111)
  })
})

describe('SUBSTRACT function', () => {
    it('should return rounded SUMition of 2.4, 3.9', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 3.9)).to.equal(-2);
    })
    it('calculateNumber(1, 3)', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2)
    })
    it('calculateNumber(1, 3.7)', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3)
    })
    it ('calculateNumber(1.5, 3.7)', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2)
    })
    it('calculateNumber(0.5, -7)', () => {
      expect(calculateNumber('SUBTRACT', 0.5, -7)).to.equal(8)
    })
    it('calculateNumber(-1, -1)', () => {
      expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2)
    })
    it('calculateNumber(0, 0)', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0)
    })
    it('calculateNumber(0, "a")', () => {
      expect(calculateNumber('SUBTRACT', 0, 'a')).to.be.NaN;
    })
    it('calculateNumber(1.5, "1")', () => {
      expect(calculateNumber('SUBTRACT', 1.5, '1')).to.equal(1)
    })
    it('calculateNumber("-7", "1")', () => {
      expect(calculateNumber('SUBTRACT', '-7', '1')).to.equal(-8)
    })
    it('calculateNumber("-5.6", "1000")', () => {
      expect(calculateNumber('SUBTRACT', '-5.6', '1000')).to.equal(-1006)
    })
    it('calculateNumber("-5000", "-111111")', () => {
      expect(calculateNumber('SUBTRACT', '-5000', '-111111')).to.equal(106111)
    })
})

describe('DIVIDE function', () => {
    it('should return rounded SUMition of 2.4, 3.9', () => {
      expect(calculateNumber('DIVIDE', 2.4, 3.9)).to.equal(0.5)
    })
    it('calculateNumber(1, 3)', () => {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333)
    })
    it('calculateNumber(1, 3.7)', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25)
    })
    it ('calculateNumber(1.5, 3.7)', () => {
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5)
    })
    it('calculateNumber(0.5, -7)', () => {
      expect(calculateNumber('DIVIDE', 0.5, -7)).to.equal(-0.14285714285714285)
    })
    it('calculateNumber(-1, -1)', () => {
      expect(calculateNumber('DIVIDE', -1, 1), -1)
    })
    it('calculateNumber(0, 0)', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error')
    })
    it('calculateNumber(0, "a")', () => {
      expect(calculateNumber('DIVIDE', 0, 'a')).to.be.NaN
    })
    it('calculateNumber(1.5, "1")', () => {
      expect(calculateNumber('DIVIDE', 1.5, '1')).to.equal(2)
    })
    it('calculateNumber("-7", "1")', () => {
      expect(calculateNumber('DIVIDE', '-7', '1')).to.equal(-7)
    })
    it('calculateNumber("-5.6", "1000")', () => {
      expect(calculateNumber('DIVIDE', '-5.6', '1000')).to.equal(-0.006)
    })
    it('calculateNumber("-5000", "-111111")', () => {
      expect(calculateNumber('DIVIDE', '-5000', '-111111')).to.equal(0.045000045000045)
    })
    it("calculateNumber('DIVIDE', '-7', '0')", () => {
        expect(calculateNumber('DIVIDE', '-7', '0')).to.equal('Error')
    })
})

describe('Unknown DIVIDEE function', () => {
    it('should return rounded SUMition of 2.4, 3.9', () => {
      expect(calculateNumber('DIVIDEE', 2.4, 3.9)).to.be.undefined
    })
    it('calculateNumber(1, 3)', () => {
      expect(calculateNumber('DIVIDEE', 1, 3)).to.be.undefined
    })
    it('calculateNumber(1, 3.7)', () => {
      expect(calculateNumber('DIVIDEE', 1, 3.7)).to.be.undefined
    })
    it ('calculateNumber(1.5, 3.7)', () => {
      expect(calculateNumber('DIVIDEE', 1.5, 3.7)).to.be.undefined
    })
    it('calculateNumber(0.5, -7)', () => {
      expect(calculateNumber('DIVIDEE', 0.5, -7)).to.be.undefined
    })
    it('calculateNumber(-1, -1)', () => {
      expect(calculateNumber('DIVIDEE', -1, 1)).to.be.undefined
    })
    it('calculateNumber(0, 0)', () => {
      expect(calculateNumber('DIVIDEE', 0, 0)).to.be.undefined
    })
    it('calculateNumber(0, "a")', () => {
      expect(calculateNumber('DIVIDEE', 0, 'a')).to.be.undefined
    })
    it('calculateNumber(1.5, "1")', () => {
      expect(calculateNumber('DIVIDEE', 1.5, '1')).to.be.undefined
    })
    it('calculateNumber("-7", "1")', () => {
      expect(calculateNumber('DIVIDEE', '-7', '1')).to.be.undefined
    })
    it('calculateNumber("-5.6", "1000")', () => {
      expect(calculateNumber('DIVIDEE', '-5.6', '1000')).to.be.undefined
    })
    it('calculateNumber("-5000", "-111111")', () => {
      expect(calculateNumber('DIVIDEE', '-5000', '-111111')).to.be.undefined
    })
})
