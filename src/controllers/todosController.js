const todosServices = require('../services/todosServices')

const getAllTodosController = (req, res, next) => {
  todosServices
    .getAllTodos()
    .then(todos =>
      res
        .status(200)
        .json(todos)
        .end()
    )
    .catch(err => next(err))
}

const getTodoByIdController = (req, res, next) => {
  const { id } = req.params

  /* Ejecuta el servicio para consultar por el parametro */
  todosServices
    .getTodoById(id)
    .then(todo => {
      res
        .status(200)
        .json(todo)
        .end()
    })
    .catch(err => next(err))
}

const addNewTodoController = (req, res, next) => {
  const todo = req.body

  if (!todo || !todo.content) {
    return res.status(400).send('No es posible crear la tarea sin el contenido')
  }

  /* Llama al servicio para crear la nueva tarea */
  todosServices
    .addNewTodo(todo)
    .then(todo => {
      res
        .status(201)
        .json(todo)
        .end()
    })
    .catch(err => next(err))
}

const updateTodoController = (req, res, next) => {
  const { id } = req.params
  const todo = req.body

  if (!todo || !todo.content) {
    return res.status(400).send('No es posible crear la tarea sin el contenido')
  }

  const updateTodoInfo = {
    ...todo,
    _id: id,
    updatedAt: new Date()
  }

  /* Llama al servicio para buscar y actualizar la nueva tarea */
  todosServices
    .updateTodoById(updateTodoInfo)
    .then(todo => {
      res
        .status(201)
        .json(todo)
        .end()
    })
    .catch(err => next(err))
}

const deleteAllTodosController = (req, res, next) => {
  todosServices
    .deleteAllTodos()
    .then(todos =>
      res
        .status(200)
        .json(todos)
        .end()
    )
    .catch(err => next(err))
}

const deleteTodoByIdController = (req, res, next) => {
  const { id } = req.params

  todosServices
    .deleteTodoById(id)
    .then(todos =>
      res
        .status(200)
        .json(todos)
        .end()
    )
    .catch(err => next(err))
}

module.exports = {
  getAllTodosController,
  getTodoByIdController,
  addNewTodoController,
  updateTodoController,
  deleteAllTodosController,
  deleteTodoByIdController
}
