const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Listado de usuarios')
  })

app.get('/info', (req, res) => {
    res.sendFile( __dirname + '/public/')
})

app.listen(port || 3000, () => {
  console.log(`Example app listening on port ${port}`)
})
