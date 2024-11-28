const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    // Create a spy for console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and call console.log once for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify the console.log output
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and call console.log once for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify the console.log output
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
