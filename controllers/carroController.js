const Carro = require('../models/carros')

exports.createCarro = async (req, res) => {
    try{
        const carro = await Carros.reate(req.body)
        await checklist.save()
        res.status(201).json(carro)
    } catch (error){
        res.status(400).json({menssage: error.menssage})
    }
}

