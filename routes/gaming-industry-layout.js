const express = require("express")
const app = express()


app.get('/gaming-industry/:id', (req, res)=>{
    req.param['id']
    let id =Number.parseInt(req.params['id'])


    const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db("newdb")
        dbo.collection("students").find({_id: Number.parseInt(req.params['id'])}).toArray((err, results)=>{  
            res.render('layour', {results: results})  
            console.log(results)
        })
        db.close()
    })
})

module.exports = app