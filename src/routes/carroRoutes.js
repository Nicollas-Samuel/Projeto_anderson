const express = require('express')
const router = express.Router()
const carroController = require('../controllers/carroController')

router.post('/many', carroController.createCarro);
router.get('/', carroController.getALLCarros);
router.put('/:id', carroController.updateCarro);
router.delete('/:id', carroController.deleteCarro);
module.exports = router;