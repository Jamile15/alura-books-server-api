const {Router} = require("express")
const {getLivros} = require("../controladores/livro")

const router = Router()


router.get('/', getLivros );

router.post('/', (req, res) =>{
    res.send('fazendo requisição do tipo post')
})

router.patch('/', (req, res) =>{
    res.send('fazendo requisição do tipo patch')
})

router.delete('/', (req, res) =>{
    res.send('fazendo requisição do tipo delete')
})




module.exports =  router
