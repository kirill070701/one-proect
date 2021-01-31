const express = require("express")
const bodyParser = require("body-parser")
const gameind = require("./routes/gaming-industry")
const layout = require("./routes/gaming-industry-layout")

const app = express()
const port = process.env.port || 3000

const urlecodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static(__dirname + '/views'))
app.use(gameind)


app.set("view engine", "ejs")

app.get('/', urlecodedParser, (req, res)=>{
    res.render('index')
})

app.use(layout)

app.listen(port, ()=>{
    console.log(`Port- ${port}`)
})