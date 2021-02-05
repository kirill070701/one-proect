const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
module.exports = function(io){ 
    console.log('podcklycheno')
    io.on('connection', (socket) => {
    
        console.log("socket ok")
        socket.emit('one', x);
    
    });
}