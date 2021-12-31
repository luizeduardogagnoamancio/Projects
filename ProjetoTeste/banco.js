const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const filmes = {}
function getFilmes () {
    return Object.values(filmes)
}

function createFilmes (filme) {
    if (!filme.id) filme.id = sequence.id
    filmes[filme.id] = filme
    return filme
}

module.exports = { getFilmes, createFilmes }