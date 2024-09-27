const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{ console.log('Conectado ao MongoDB') })
.catch((error)=>{ console.log('Erro na conexao', error) });