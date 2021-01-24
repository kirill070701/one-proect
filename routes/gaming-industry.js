const express = require("express")
const app = express()

app.get('/gaming-industry', (req,res)=>{
    const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db("newdb")
        dbo.collection("students").find({}).toArray((err, results)=>{  
            res.render('gaming-industry', {results: results})      
            //console.log(results)
        })
        db.close()
    })



    //res.render('gaming-industry')

    
})


module.exports = app