const Todo = require('../models/Todo')

const getAllTodos = () => {
  return Todo.find({})
}

const getTodoById = id => {
  return Todo.findById(id)
}

const addNewTodo = todo => {
  /* Crea el objeto nuevo para guardar la tarea con el parametro todo */
  const newTodo = new Todo({
    ...todo,
    createdAt: new Date(),
    userId: todo.userId
  })

  /* Guarda la tarea en la base de mongo */
  return newTodo.save()
}

const updateTodoById = todo => {
  /* Guarda la tarea en la base de mongo */
  return Todo.findByIdAndUpdate(todo._id, todo, { new: true })
}

const deleteAllTodos = () => {
  return Todo.deleteMany()
}

const deleteTodoById = id => {
  return Todo.findOneAndDelete(id)
}

module.exports = {
  getAllTodos,
  getTodoById,
  addNewTodo,
  updateTodoById,
  deleteAllTodos,
  deleteTodoById
}
