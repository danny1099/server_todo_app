const mongoose = require('mongoose')
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }
const connection = process.env.MONGO_URI

/* Conectar al servicio de mondo db con el metodo connect */
mongoose.set('strictQuery', false)

const connect = () => {
  return mongoose
    .connect(connection, mongooseOptions)
    .then(() => console.log('La base de datos se ha conectado exitosamente'))
    .catch(e => console.log(e.message))
}

const disconnect = () => {
  return mongoose.connection.close()
}

module.exports = { connect, disconnect }
