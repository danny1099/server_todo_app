const express = require('express')
const router = express.Router()

/* Rutas del servidor */
const healthRouter = require('./health')
const todoRouter = require('./todo')
const userRouter = require('./users')
const loginRouter = require('./login')

/* Manejador de ruta general */
router.use(healthRouter)
router.use(todoRouter)
router.use(userRouter)
router.use(loginRouter)

module.exports = router
