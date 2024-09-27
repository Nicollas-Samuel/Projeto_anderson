const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  marca: { type: String, required: true },
  tipo: { type: String, required: true }, 
  modelo: { type: String, required: true },
  qtAcentos: { type: Number, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true },
});

const Carro = mongoose.model('carros', CarroSchema);

module.exports = Carro;
