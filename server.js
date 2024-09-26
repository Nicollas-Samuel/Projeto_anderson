const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const cors = require('cors');

const port = process.env.PORT || 3000;
require('./src/config/database');
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/cadastrarCarro', (req, res) => {
    const novoCarro = req.body; 
    let carros = { carro: [] };
    if (fs.existsSync('carros.json')) {
        carros = JSON.parse(fs.readFileSync('carros.json', 'utf8'));
    }
    carros.carro.push(novoCarro);
    fs.writeFileSync('carros.json', JSON.stringify(carros, null, 2), 'utf8');
    res.send('Carro cadastrado com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
