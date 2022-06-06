/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  id: 'ARG',
  flag: "https://flagcdn.com/ar.svg",
  continent: 'Americas',
  capital: 'Buenos Aires'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('Should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe('GET /countries/{idPais}', () => {
    it('Should get 200', () =>
      agent.get('/countries/arg').expect(200)
    );
  });
  describe('GET /countries?name="...."', () => {
    it('Should get 200', () =>
      agent.get('/countries?name=argentina').expect(200)
    );
  });
});

