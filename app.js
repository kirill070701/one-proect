const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")

const app = express()
const port = process.env.port || 3000

const urlecodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static(__dirname + '/views'))

app.get('/', urlecodedParser, (req, res)=>{
    res.sendFile('/index.html')
})

app.post('/', urlecodedParser, (req, res)=>{
    
})



app.listen(port, ()=>{
    console.log(`Port- ${port}`)
})