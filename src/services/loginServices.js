/* disable eslint */
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/* Obtiene el valor del secret del archivo .env */
const SECRET_APP_JWT = process.env.SECRET_APP

const loginUserByPassword = async data => {
  const { username, password } = data

  const user = await User.findOne({ username })
  const isCorrectPassword =
    user === null ? false : await bcrypt.compare(password, user.password)

  if (!(user && isCorrectPassword)) return null

  /* Se crea el objeto que se enviara con el token */
  const infoByUser = {
    username: user.username,
    _id: user._id
  }

  const tokenForUser = jwt.sign(infoByUser, SECRET_APP_JWT)

  /* Si la validación para la comparación devuelve los datos del usuario */
  return { ...infoByUser, token: tokenForUser }
}

module.exports = { loginUserByPassword }
