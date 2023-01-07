const ERROR_HANDLERS = {
  CastError: (res, err) =>
    res.status(400).send({ error: 'id user is malformed' }),

  JsonWebTokenError: (res, err) =>
    res.status(401).send({ error: 'token is missing or invalid' }),

  ValidationError: (res, err) => res.status(409).send({ error: err.message }),
  defaultError: (res, err) => res.status(500).send({ error: err.message })
}

module.exports = (err, req, res, next) => {
  /* Valida el tipo de error devuelto */
  const errorHandler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
  errorHandler(res, err)
}
