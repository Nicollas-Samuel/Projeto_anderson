const express = require('express');
const dotenv = require('dotenv');
const carroRoutes = require('./src/routes/carroRoutes.js');
require('./src/config/database');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/carros', carroRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});