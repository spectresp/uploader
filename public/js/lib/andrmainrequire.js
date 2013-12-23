requirejs.cofig({
  jquery: 'js/lib/jquery-1.8.2.min.js',


})


require([], function() {

  var socket = io.connect();

  $('#sender').bind('click', function() {
    socket.emit('message', 'Message Sent on ' + new Date());
  });

  socket.on('server_message', function(data){
    $('#receiver').append('<li>' + data + '</li>');
  });

}); // require
