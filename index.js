const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('Olá, mundo')
})

// Lista de personagem
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

// Read ALL -> [GET] /item
app.get('/item', function (req, res) {
  res.send(lista)
})

app.listen(3000)
