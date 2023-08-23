const {Router} = require("express")

const router = Router()


router.get('/', (req, res) =>{
    try {
        res.send('ola mundo alura mundo')

    }
    catch (error){
        res.status(500)
        res.send(error.message)
    }

});

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
