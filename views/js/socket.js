const express = require('express')
const app = express()
const layouts = require("../../routes/gaming-industry-layout")

module.exports = {
        start: async function(io){ 
            for (; ; ) {
                setTimeout(() => {
                    console.log('podcklycheno')
                    io.on('connection', (socket) => {
                
                        const url = 'mongodb+srv://Admin:159963357741@cluster0.mjotf.mongodb.net/statie'
                        const MongoClient = require('mongodb').MongoClient
                    
                        MongoClient.connect(url, (err, db)=>{
                            if(err) throw err;
                            var dbo = db.db("newdb")
                    
                            dbo.collection("students").find({}).sort({_id:-1}).limit(3).toArray((err, results)=>{ 
                                console.log("ok")
                                module.exports = { results: results}
                                socket.emit('one', results);
                                console.log("socket ok")
                    
                                
                            })
                    
                            db.close()
                        })
                        
                        
                    
                    });
                }, 500);
                
            }
            
        
    }
}