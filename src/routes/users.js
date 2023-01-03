/* disable eslint */
const express = require('express')
const router = express.Router()

/* Metodos para el llamado de las funciones */
const usersController = require('../controllers/usersController')

/* Configuración del router */
router
  .get('/api/user', usersController.getAllUsersController)
  .get('/api/user/:id', usersController.getUserByIdController)
  .post('/api/user', usersController.addNewUserController)
  .put('/api/user/:id', usersController.updateUserController)

module.exports = router
