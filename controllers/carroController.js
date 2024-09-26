const Carro = require('../models/carros')

exports.createCarro = async (req, res) => {
    try{
        const carro = await Carro.reate(req.body)
        carro.push(task._id)
        await carro.save()
        res.status(201).json(carro)
    } catch (error){
        res.status(400).json({menssage: error.menssage})
    }
}

exports.updateCarro = async (req,res) =>{
    try{
        const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({menssage: "carro adcionado"})
    }catch{
        res.status(400).json({menssage: error.menssage}) 
    } 
}

exports.deleteCarro = async (req,res) =>{
    try{
        const carro = await Carro.findByIdAndUpdate(req.params.id)
        carro.pull(carro._id)
        await carro.save
        res.status(200).json({menssage: "Carro Deletada"})
    }catch{
        res.status(400).json({menssage: error.menssage}) 
    } 
}