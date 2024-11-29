const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('Correct status code?', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Correct result?', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('Other?', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        expect(res.headers['content-type']).to.include('application/json');
        done();
      });
  });
});
