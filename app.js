const express = require("express")
const bodyParser = require("body-parser")
const gm = require("./routes/gaming-industry")
const fs = require("fs")

const app = express()
const port = process.env.port || 3000

const urlecodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static(__dirname + '/views'))
app.use(gm)

app.set("view engine", "ejs")

app.get('/', urlecodedParser, (req, res)=>{
    res.render('index')
})
app.get('/gaming-industry/:id', (req, res)=>{
    var a = req.param['id']
    console.log(req.params['id'])
    res.render('index')

})

app.listen(port, ()=>{
    console.log(`Port- ${port}`)
})