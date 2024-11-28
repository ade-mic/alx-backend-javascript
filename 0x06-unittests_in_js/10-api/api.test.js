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

describe('/available_payments endpoint', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return status code 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods', (done) => {
    request(url, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('/login endpoint', () => {
  const url = 'http://localhost:7865/login';

  it('should return status code 200', (done) => {
    request.post(
      url,
      {
        json: {
          userName: 'Betty'
        }
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('should return the correct welcome message', (done) => {
    request.post(
      url,
      {
        json: {
          userName: 'Betty'
        }
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
