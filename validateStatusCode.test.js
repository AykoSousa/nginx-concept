const request = require('supertest');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, '../public/index.html');
    fs.readFile(htmlPath, 'utf8', (err, html) => {
        if (err) {
            console.error('Erro ao ler o arquivo HTML:', err);
            res.status(500).send('Internal server error');
            return;
        }
        res.status(200).send(html);
    });
});

describe('Testing route "/"', () => {
    beforeAll(() => {
        server = app.listen(3000, () => console.log('Server running 🚀'));
    });

    afterAll(() => {
        server.close();
    });

    it('Must return status code 200 for "/" route', async () => {
      const response = await request(app)
        .get('/');
      expect(response.statusCode).toBe(200);
    });
});