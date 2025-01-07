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
})

app.listen(8080, () => {
    console.log(`Server running!`);
});