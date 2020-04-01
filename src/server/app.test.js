const supertest = require('supertest');
const app = require('./app');

describe('/server', () => {
    let server;
    let request;
    beforeAll(async () => {
        server = await app.listen(3031);
        request = supertest(server);
    });
    afterAll(() => {
        server.close();
    });
    it('Returns 404 for non defined routes', async () => {
        const resp = await request.get('/notdefined');
        expect(resp.status).toBe(404);
        expect(resp.body.error).toBe('Not found');
    });
});