var http    = require('http'), 
    io      = require('socket.io'),
    sys     = require('sys'),
    express = require('express');

var port = 8111;

var server = express.createServer();
io = require('socket.io').listen(server);
server.use(express.static(__dirname + '/public'));
server.use(express.errorHandler({showStack: true, dumpExceptions: true}));
server.listen(port);

server.listen(port);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'foo' });
  socket.on('my other event', function (data) {
    console.log("\nReceived - " + data.my);
  });
});

