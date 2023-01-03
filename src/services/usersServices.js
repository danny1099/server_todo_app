const User = require('../models/User')

const getAllUsers = () => {
  return User.find({})
}

const getUserById = id => {
  return User.findById(id)
}

const addNewUser = async user => {
  /* Crea el objeto nuevo para guardar el usuario con el parametro user */
  const newUser = new User({
    ...user,
    createdAt: new Date()
  })

  /* Guarda el nuevo usuario en la base de mongo */
  return newUser.save()
}

const updateUserById = user => {
  /* Actualiza el usuario en la base de mongo */
  return User.findByIdAndUpdate(user._id, user, { new: true })
}

module.exports = { getAllUsers, getUserById, addNewUser, updateUserById }
