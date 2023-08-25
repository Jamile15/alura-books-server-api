const {Router} = require("express")
const {getLivros, getLivro, postLivro, patchLivro} = require("../controladores/livro")

const router = Router()


router.get('/', getLivros );

router.get('/:id', getLivro );


router.post('/' , postLivro);

router.patch('/:id', patchLivro);


router.delete('/', (req, res) =>{
    res.send('fazendo requisição do tipo delete')
})




module.exports =  router
