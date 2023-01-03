const express = require('express')
const router = express.Router()

/* Rutas del servidor */
const healthRouter = require('./health')
const todoRouter = require('./todo')
const userRouter = require('./users')

/* Manejador de ruta general */
router.use(healthRouter)
router.use(todoRouter)
router.use(userRouter)

module.exports = router
