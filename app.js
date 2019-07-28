var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;

app.get('/' , (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', socket=>{
    socket.on('chat message', msg=>{
        io.emit('chat message', msg);
    });
});

http.listen(PORT, ()=>{
    console.log(`server listening\nport: ${PORT}`);
});
