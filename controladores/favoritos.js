const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favoritos");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros)

    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function postFavoritos(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("livro inserido com sucesso")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavoritos(req, res) {
    try {
        const id = req.params.id


        if (id && Number(id)) {
            deletaFavoritoPorId      (id)
            res.send("item deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id DELETE invalido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)

    }
}



module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos

}