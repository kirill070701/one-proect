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
                        var a = [{"image": String(results[0].picture), "name": results[0].title, "id": results[0]._id},
                            {"image": String(results[1].picture), "name": results[1].title, "id": results[1]._id},
                            {"image": String(results[2].picture), "name": results[2].title, "id": results[2]._id}]
                    
                        socket.emit('one', a);
                        console.log("socket ok")
                    })
                    db.close()
                })
            });
        }, 0);
    }
}