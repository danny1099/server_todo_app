const User = require('../models/User')
const bcrypt = require('bcrypt')

const getAllUsers = () => {
  return User.find({}).populate('notes')
}

const getUserById = id => {
  return User.findById(id)
}

const addNewUser = async user => {
  const passwordHash = await bcrypt.hash(user.password, 10)

  /* Crea el objeto nuevo para guardar el usuario con el parametro user */
  const newUser = new User({
    ...user,
    password: passwordHash,
    createdAt: new Date()
  })

  /* Guarda el nuevo usuario en la base de mongo */
  return newUser.save()
}

const updateUserById = async user => {
  const passwordHash = await bcrypt.hash(user.password, 10)

  const data = {
    ...user,
    password: passwordHash
  }
  /* Actualiza el usuario en la base de mongo */
  return User.findByIdAndUpdate(user._id, data, { new: true })
}

module.exports = { getAllUsers, getUserById, addNewUser, updateUserById }
