define(["jquery"], function($) {
  console.log('andrmain.js loading');
  //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
  $(function() {
    $('body').alpha().beta();
  });

  var socket = io.connect();

  $('#sender').bind('click', function() {
    socket.emit('message', 'Message Sent on ' + new Date());
  });

  socket.on('server_message', function(data){
    $('#receiver').append('<li>' + data + '</li>');
  });


});