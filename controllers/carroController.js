const Carro = require('../models/carros');

exports.createCarro = async (req, res) => {
    try{
        const carro = await Carro.create(req.body);
        res.status(201).json(carro);
    } catch (error){
        res.status(400).json({menssage: error.menssage});
    }
};

exports.getALLCarros = async (req, res) => {
    try{
        const carro = await Carro.find().populate('carro');
        res.status(200).json(carro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCarro = async (req,res) =>{
    try{
        const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({menssage: "carro adcionado"});
    }catch{
        res.status(400).json({menssage: error.menssage});
    } 
};

exports.deleteCarro = async (req,res) =>{
    try{
        await Carro.findByIdAndUpdate(req.params.id);
        res.status(200).json({menssage: "Carro Deletada"});
    }catch{
        res.status(400).json({menssage: error.menssage}) ;
    } 
};