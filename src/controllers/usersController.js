const usersServices = require('../services/usersServices')
const bcrypt = require('bcrypt')

const getAllUsersController = (req, res, next) => {
  usersServices
    .getAllUsers()
    .then(users =>
      res
        .status(200)
        .json(users)
        .end()
    )
    .catch(err => next(err))
}

const getUserByIdController = (req, res, next) => {
  const { id } = req.params

  /* Ejecuta el servicio para consultar por el parametro */
  usersServices
    .getUserById(id)
    .then(user => {
      res
        .status(200)
        .json(user)
        .end()
    })
    .catch(err => next(err))
}

const addNewUserController = (req, res, next) => {
  const user = req.body

  if (!user || !user.username) {
    return res
      .status(400)
      .send('No es posible crear el usuario sin el nickname')
  }

  /* Llama al servicio para crear la nueva tarea */
  usersServices
    .addNewUser(user)
    .then(data => {
      res
        .status(201)
        .json(data)
        .end()
    })
    .catch(err => next(err))
}

const updateUserController = async (req, res, next) => {
  const { id } = req.params
  const user = req.body

  if (!user || !user.username) {
    return res
      .status(400)
      .send('No es posible crear el usuario sin el nickname')
  }

  const passwordHash = await bcrypt.hash(user.password, 10)

  const updateUserInfo = {
    ...user,
    _id: id,
    password: passwordHash,
    updatedAt: new Date()
  }

  /* Llama al servicio para buscar y actualizar la nueva tarea */
  usersServices
    .updateUserById(updateUserInfo)
    .then(data => {
      res
        .status(201)
        .json(data)
        .end()
    })
    .catch(err => next(err))
}

module.exports = {
  getAllUsersController,
  getUserByIdController,
  addNewUserController,
  updateUserController
}
