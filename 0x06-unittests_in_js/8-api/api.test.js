const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, { json: true }, (err, res, body) => {
      expect(body).to.be.an('object');
      expect(body.message).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.headers['content-type']).to.include('application/json');
      done();
    });
  });
});
