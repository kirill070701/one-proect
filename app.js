const express = require("express")
const bodyParser = require("body-parser")
const gameind = require("./routes/gaming-industry")
const layout = require("./routes/gaming-industry-layout")
const socket = require('./views/js/socket')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.port || 3000

const urlecodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static(__dirname + '/views'))
app.use(gameind)


app.set("view engine", "ejs")

app.get('/', urlecodedParser, (req, res)=>{
    res.render('index')
    socket.so("asde")
})
app.use(layout)

http.listen(port, ()=>{
    console.log(`Port- ${port}`)
})