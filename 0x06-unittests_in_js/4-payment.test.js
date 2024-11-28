const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {


  this.beforeEach(function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
  });

  this.afterEach(function() {
    stub.restore();
    spy.restore();
  })

  it('should call Utils.calculateNumber with SUM, 100, and 20', function() {
    sendPaymentRequestToApi(100, 20);
    assert(stub.calledOnceWithExactly('SUM', 100, 20));
  });

  it('should log the message', function() {
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledOnceWithExactly('The total is: 10'));
  })
});
