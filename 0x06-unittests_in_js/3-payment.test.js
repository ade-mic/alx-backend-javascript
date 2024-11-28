const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberSpy;

  beforeEach(function () {
    // Create a spy for Utils.calculateNumber
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    // Restore the spy
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with type = SUM, a = 100, b = 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumber was called once
    expect(calculateNumberSpy.calledOnce).to.be.true;

    // Assert that calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
