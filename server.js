var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/build/'));

io.on('connection', (socket) => {
    console.log('connect')
    socket.join('007')

    socket.on('newCode', data => {
        console.log("upload code: " + data.code)
        socket.broadcast.emit('updateCode',  data);
    })

    socket.on('disconnect', ()=>{
        console.log('disconnect.')
    })
})

http.listen(9999, ()=> {
    console.log('listening on * 9999');
})
