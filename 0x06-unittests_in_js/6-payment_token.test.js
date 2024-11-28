const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify the resolved value
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Signal Mocha that the test is complete
      })
      .catch((error) => {
        done(error); // Fail the test if an error is thrown
      });
  });

  it('should do nothing when success is false', function () {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined; // Ensure nothing happens
  });
});
