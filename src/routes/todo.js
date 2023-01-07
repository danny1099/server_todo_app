/* disable eslint */
const router = require('express').Router()

/* Metodos para el llamado de las funciones */
const todosController = require('../controllers/todosController')

/* Middlewares para el control de rutas */
const tokenMiddleware = require('../middlewares/handleTokenUser')

/* Configuración del router */
router
  .get('/api/todo', todosController.getAllTodosController)
  .get('/api/todo/:id', todosController.getTodoByIdController)
  .post('/api/todo', tokenMiddleware, todosController.addNewTodoController)
  .put('/api/todo/:id', tokenMiddleware, todosController.updateTodoController)
  .delete('/api/todo/', todosController.deleteAllTodosController)
  .delete('/api/todo/:id', todosController.deleteTodoByIdController)

module.exports = router
