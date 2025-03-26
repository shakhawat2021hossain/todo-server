const express = require('express')
const router = express.Router()
const controllers = require('../controllers/todoController')

router.get('/', controllers.getAllTodos)
router.post('/', controllers.addTodo)
router.delete('/:id', controllers.deleteTodo)
router.put('/:id', controllers.updateTodo)
router.get('/:id', controllers.getATodo)

module.exports = router;