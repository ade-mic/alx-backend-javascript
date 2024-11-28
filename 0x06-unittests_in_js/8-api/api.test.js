const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  // Before starting tests, ensure the server is running
  before((done) => {
    require('./api'); // Start the server
    done();
  });

  it('should return the correct status code', (done) => {
    request.get(baseUrl, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(baseUrl, (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return a plain text content-type', (done) => {
    request.get(baseUrl, (err, res) => {
      expect(res.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
