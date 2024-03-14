const request = require('supertest');
const app = require('./app');

describe('GET /api/', () => {
  it('should return "Salam Malaysia Madani!!"', async () => {
    const response = await request(app).get('/api/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Salam Malaysia Madani!!');
  });
});
