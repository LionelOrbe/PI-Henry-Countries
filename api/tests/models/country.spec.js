const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('Name validations:', () => {
      it('Should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());     
      });
      it('Should throw an error if name has numbers', (done) => {
        Country.create({name: 'Arg3456'})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
      
    });
    describe('Id validations:', () => {
      it('Should throw an error if id is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Should throw an error if id has more than 3 characters', () => {
        Country.create({ id: 'argen' });
      });
      it('Should throw an error if id has numbers', () => {
        Country.create({ id: '123' });
      });
      it('Should work when its a valid id', () => {
        Country.create({ id: 'arg' });
      });
    });
  });
});
