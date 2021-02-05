const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
var socket = require('../views/js/socket')(io)

app.get('/gaming-industry/:id', (req, res)=>{
    const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
    const MongoClient = require('mongodb').MongoClient

    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db("newdb")
        dbo.collection("students").find({_id: Number.parseInt(req.params['id'])}).toArray((err, results)=>{  
            res.render('layour', {results: results})  
            
        })


        dbo.collection("students").find({}).sort({_id:-1}).limit(3).toArray((err, results)=>{ 
            console.log("ok")
            socket
         })

        db.close()
    })
})

module.exports = app
