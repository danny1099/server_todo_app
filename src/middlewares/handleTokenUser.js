const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let tokenAuth = ''
  const autorization = req.get('authorization')

  /* Valida si la cabecera de auth viene en la peticion */
  if (autorization && autorization.toLowerCase().startsWith('bearer')) {
    tokenAuth = autorization.split(' ').pop()
  }

  const decodedToken = jwt.verify(tokenAuth, process.env.SECRET_APP)

  if (!tokenAuth || !decodedToken._id) {
    return res.status(401).send({ error: 'token is missing or invalid' })
  }

  /* Recupera los datos del token para regresar al controlador */
  req.userId = decodedToken._id
  next()
}
