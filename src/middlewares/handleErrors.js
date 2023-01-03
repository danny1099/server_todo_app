module.exports = (err, req, res, next) => {
  /* Valida el tipo de error devuelto */
  if (err.name === 'CastError') {
    return res.status(400).send('el id enviado no esta bien formateado')
  } else {
    return res.status(500).end('No encontro en la prumera validacion')
  }
}
