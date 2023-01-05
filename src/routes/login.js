/* disable eslint */
const router = require('express').Router()

/* Metodos para el llamado de las funciones */
const loginController = require('../controllers/loginController')

/* Configuración del router */
router.post('/api/login', loginController.loginUserController)

module.exports = router
