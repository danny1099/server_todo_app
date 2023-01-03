/* disable eslint */
const express = require('express')
const router = express.Router()

/* Metodos para el llamado de las funciones */
const todosController = require('../controllers/todosController')

/* Configuración del router */
router
  .get('/api/todo', todosController.getAllTodosController)
  .get('/api/todo/:id', todosController.getTodoByIdController)
  .post('/api/todo', todosController.addNewTodoController)
  .put('/api/todo/:id', todosController.updateTodoController)
  .delete('/api/todo/', todosController.deleteAllTodosController)
  .delete('/api/todo/:id', todosController.deleteTodoByIdController)

module.exports = router
