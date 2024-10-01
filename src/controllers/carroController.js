const Carro = require('../models/carros');

exports.createCarro = async (req, res) => {
    try{
        const carro = await Carro.insertMany(req.body);
        res.status(201).json(carro);
    } catch (error){
        res.status(400).json({message: error.mensage});
    }
};

exports.getALLCarros = async (req, res) => {
    try{
        const carros = await Carro.find();
        res.status(200).json(carros);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCarro = async (req,res) =>{
    try{
        const carroAtualizado = await Carro.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!carroAtualizado) {
            return res.status(404).json({ message: 'Carro não encontrado' });
        }
        res.status(200).json({ message: "carro adcionado", carroAtualizado });
    }catch{
        res.status(400).json({ message: error.message });
    } 
};

exports.deleteCarro = async (req,res) =>{
    try{
        await Carro.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Carro Deletado", Carro});
    }catch{
        res.status(400).json({message: error.message}) ;
    } 
};