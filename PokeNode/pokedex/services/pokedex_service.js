const fs = require('fs')
const mongoose = require('mongoose')
const { Schema } = mongoose

const caminho = __dirname + '/pokedex.json'
const pokedexJSON = fs.readFileSync(caminho, 'utf-8')
const pokedex = JSON.parse(pokedexJSON)

function lerPokedex() {
    return pokedex 
    /* return fs.readFile(caminho, 'utf-8', (err, conteudo) => config = JSON.parse(conteudo)) */
}

function getPokemon(id) {
    return pokedex[id] || {}
}

function getPokemonType(id) {
    return pokedex[id].type
}



module.exports = { lerPokedex, getPokemon, getPokemonType }