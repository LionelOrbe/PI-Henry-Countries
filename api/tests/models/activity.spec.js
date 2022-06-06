const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('Name validations:', () => {
      it('Should throw an error if name is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());     
      });
      
      it('Should work when its a valid name', () => {
        Activity.create({ name: 'Running' });
      });
      
    });
    describe('Difficulty validations:', () => {
      it('Should throw an error if difficulty is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Should throw an error if difficulty is more than "5"', () => {
        Activity.create({ difficulty: '7' });
      });
      it('Should throw an error if difficulty its not an INTEGER', () => {
        Activity.create({ id: 'cuatro' });
      });
      it('Should work when its a valid difficulty', () => {
        Activity.create({ id: 'arg' });
      });
    });
  });
});
