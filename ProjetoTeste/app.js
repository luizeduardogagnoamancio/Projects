const porta = 3004
const express = require('express')
const app = express()
const banco = require('./banco')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/filmes', (req, res, next) => {
    res.send(banco.getFilmes())
})

app.post('/filmes', (req, res, next) => {
    const filme = banco.createFilmes({
        nome: req.body.nome,
        genero: req.body.genero
    })
    res.send(filme) //JSON
})


app.listen(porta, (req, res, next) => {
    console.log(`Servidor iniciado na porta ${porta}`)
})