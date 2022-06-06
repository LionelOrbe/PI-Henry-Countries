const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
    "name": "Running",
    "difficulty": 2,
    "duration": "2",
    "season": "winter",
    "countries": ["arg","bra","irq"]
  }
  
 const trek = {
    "name": "Trekking",
    "difficulty": 1,
    "duration": "3",
    "season": "spring",
    "countries": ["nic","civ","egy","ven"]
  }

describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: true })
    .then(() => Activity.create(activity)));
  describe('GET /activity', () => {
    it('Should get 200', () =>
      agent.get('/activity').expect(200)
    );
  });
  describe('POST /activity', () => {
    it('Should get 200', () =>
      agent.post('/activity')
      .send(trek)
      .expect(200)
    );
  });
  
});

