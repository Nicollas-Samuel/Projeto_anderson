const express = require('express')
const router = express.Router()
const taskController = require('../controllers/carroController')

router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
module.exports = router;