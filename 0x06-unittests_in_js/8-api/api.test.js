process.noDeprecation = true;
const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Index page', () => {
  const endpoint = 'http://localhost:7865';

  it('Returns the right status', function (done) {
    request(endpoint, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

