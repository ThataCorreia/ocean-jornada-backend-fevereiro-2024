const express = require('express')
const { MongoClient } = require('mongodb')

const dbUrl = 'mongodb+srv://admin:EzNMDRP1wPyLj9lB@cluster0.cfjfxxs.mongodb.net'
const dbName = 'OceanJornadaBackendFev2024'

async function main() {
  const client = new MongoClient(dbUrl)

  console.log('conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!')


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

  // Read By ID -> [GET] /item/:id
  app.get('/item/:id', function (req, res) {
    const id = req.params.id

    // Acesso item na lista baseado no ID recebido
    const item = lista[id]

    // Envio o item obtido como resposta http
    res.send(item)
  })

  //sinalizando que o corpo da requisição está em JSON
  app.use(express.json())

  // Create -> [POST] /item
  app.post('/item', function (req, res) {
    //Extraimos o corpo da requisição
    const body = req.body

    const item = body.nome

    lista.push(item)


    res.send('Item adicionado com sucesso!')
  })

  app.listen(3000)

}

main()