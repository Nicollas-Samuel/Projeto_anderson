const express = require('express');
const dotenv = require('dotenv');
const carroRoutes = require('./src/routes/carroRoutes');
require('./src/config/database');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/Carro', carroRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});