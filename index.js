/* Llama a la conexion de base datos y al dotenv */
require('dotenv').config()
require('./src/database/mongo').connect()

const express = require('express')
const cors = require('cors')
const Sentry = require('@sentry/node')
const Tracing = require('@sentry/tracing')

const app = express()
const PORT = process.env.PORT

Sentry.init({
  dsn:
    'https://9e97cc82c3da4e43b7aa618a26380022@o4504437734244352.ingest.sentry.io/4504437735292928',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app })
  ],

  tracesSampleRate: 1.0
})

/* Midlewares de sentry para la envio de errores */
app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())

/* Midlewares para el sever app */
const notFound = require('./src/middlewares/notFound')
const handleErrors = require('./src/middlewares/handleErrors')

app.use(cors())
app.use(express.json())
app.use(require('./src/routes/index.js'))
app.use(notFound)
app.use(Sentry.Handlers.errorHandler())
app.use(handleErrors)

/* Escucha del servidor al iniciarse */
app.listen(PORT, () => {
  console.log(`App server is running on port ${PORT}`)
})
