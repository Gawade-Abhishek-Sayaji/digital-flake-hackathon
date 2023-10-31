const express = require('express')
const app = express()   
const cors=require('cors')
require("./db/config")

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
    let result = req.body
    console.log(result)
    res.send(result)
})


app.listen(3000)