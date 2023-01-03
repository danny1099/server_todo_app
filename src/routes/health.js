const express = require('express')
const router = express.Router()

router
  .get('/', (req, res) => {
    res.send('<H1>Server is running</H1>')
  })
  .get('/api/', (req, res) => {
    res.send('<H1>Server is running</H1>')
  })

module.exports = router
