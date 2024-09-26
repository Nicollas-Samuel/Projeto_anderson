const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: Number, required: true },
  nome: { type: String, required: true },
  tipo: { type: String, required: true }, 
  qtAcentos: { type: Number, required: true },
  preco: { type: Number, required: true },
  Carro: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carro' }]
});

const Carro = mongoose.model('Carro', CarroSchema);

module.exports = Carro;
