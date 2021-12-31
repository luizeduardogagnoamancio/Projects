const port = 3002
const express = require('express')
const app = express()
const services = require('./pokedex/services/pokedex_service')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/pokedex', (req, res, next) => {
    res.send(services.lerPokedex())
})

app.get('/pokedex/:id', (req, res, next) => {
    res.send(services.getPokemon(req.params.id))
})

app.get('/pokedex/:id/tipo', (req, res, next) => {
    res.send(services.getPokemonType(req.params.id))
})

app.listen(port, (req, res, next) => {
    console.log(`Server is listening to port ${port}`)
})
