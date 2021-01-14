const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")

const app = express()
const port = process.env.port || 3000

const urlecodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static(__dirname + '/views'))

app.set("view engine", "ejs")

app.get('/', urlecodedParser, (req, res)=>{
    res.render('index')
})

app.post('/gaming-industry', (req,res)=>{
    res.render('gaming-industry')
    //res.render('head')
})
app.get('/gaming-industry', (req,res)=>{
    console.log("ok")
    res.render('gaming-industry')
    //res.render('head')
})



app.listen(port, ()=>{
    console.log(`Port- ${port}`)
})