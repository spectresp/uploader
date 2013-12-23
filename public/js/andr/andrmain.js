define(["jquery", "underscore"], function($, _) {
  console.log('andrmain.js loading');

  var socket = io.connect();

//  $('#sender').bind('click', function() {
//    socket.emit('message', 'Message Sent on ' + new Date());
//  });

  socket.on('server_message', function(data){
    $('#receiver').append('<li>' + data + '</li>');
  });

});