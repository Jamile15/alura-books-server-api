const express = require('express')

const app = express()

const port = 1980

app.get('/', (req, res) =>{
    res.send('ola mundo alura')
});

app.listen(port,() => {
    console.log(`escutando porta ${port}`)
})
