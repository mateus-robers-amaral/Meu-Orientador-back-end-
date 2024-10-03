const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/ler-arquivo', (req, res) => {
    const filePath = 'caminho/para/seu/arquivo.txt';

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Erro ao ler o arquivo.');
        }
        res.send(`Conteúdo do arquivo: ${data}`);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
