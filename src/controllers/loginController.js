/* disable eslint */
/* eslint-disable indent */
const loginServices = require('../services/loginServices')

const loginUserController = (req, res, next) => {
  const data = req.body

  if (!data || !data.username || !data.password) {
    return res
      .status(400)
      .send('No es posible iniciar sesión sin los datos de usuario')
      .end()
  }

  loginServices
    .loginUserByPassword(data)
    .then(user => {
      user !== null
        ? res
            .status(200)
            .json(user)
            .end()
        : res
            .status(401)
            .json({ message: 'The credential are invalid' })
            .end()
    })
    .catch(err => next(err))
}

module.exports = { loginUserController }
