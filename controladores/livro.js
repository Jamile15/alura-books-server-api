function getLivros(req, res) {
    try {
        res.send('ola mundo alura mundo')

    }
    catch (error){
        res.status(500)
        res.send(error.message)
    }

}

module.exports= {
    getLivros
}