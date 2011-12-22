var socket = io.connect();
socket.on('connect', function(){
  $('#status').text('Connected');
});
socket.on('message', function(m){
  $('#message').text(m);
});
socket.on('disconnect', function(){
  $('#status').text('Disconnected');
});

socket.on('news', function (data) {
   $('#message').text("Received - " + data.hello);
   socket.emit('my other event', { my: 'bar' });
});
