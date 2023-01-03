const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Todo'
      }
    ],
    createdAt: Date
  },
  { timestamps: true }
)

/* Ajusta las propiedades que devuelve el modelo */
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.password
  }
})

/* Modelo del esquema para crear la coleccion */
const User = model('User', userSchema)

module.exports = User
