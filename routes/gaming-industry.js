const express = require("express")
const app = express()
const page = require("../views/js/page-numbering")

app.get('/gaming-industry', (req,res)=>{

    const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db("newdb")
        var p
        var b
        var c = 0
        
        if (req.query.p == null) {
            p=0
            cout()
            dbo.collection("students").find({}).sort({_id:-1}).limit(10).toArray((err, results)=>{ 
                res.render('gaming-industry', {results: results, p:p, c: Math.floor(c)}) 
            })
        }else{
            cout()
            p = req.query.p
            var pp = Number.parseInt(p)+1
            dbo.collection("students").find({}).sort({_id:-1}).limit((pp *10)).toArray((err, results)=>{  
                res.render('gaming-industry', {results: results, p:p, c: Math.floor(c)})      
            })
            
        }

        function cout(){
            dbo.collection("students").count({}, function(error, numOfDocs){
                c =numOfDocs / 10
                var a = page.name
                b = a(numOfDocs)
                if (b > 0) {
                    c = c + 1
                }
            })
        }
        db.close()

    })
    



    //res.render('gaming-industry')

    
})



module.exports = app