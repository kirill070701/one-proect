module.exports = {
    start: function(io){ 
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
                        var a = [{"one": String(results[0].picture), "two": results[0].title},
                            {"one": String(results[1].picture), "two": results[1].title},
                            {"one": String(results[2].picture), "two": results[2].title}]
                    
                        socket.emit('one', a);
                        console.log("socket ok")
                    })
                    db.close()
                })
            });
        }, 0);
    }
}