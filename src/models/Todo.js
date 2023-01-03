const { Schema, model } = require('mongoose')

/* Esquema base para la coleccion de documentos */
const todoSchema = new Schema(
  {
    content: String,
    completed: Boolean,
    createdAt: Date,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

/* Modelo del esquema para crear la coleccion */
const Todo = model('Todo', todoSchema)

module.exports = Todo
