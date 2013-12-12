//setup Dependencies
var connect = require('connect'),
    express = require('express'),
    app = express(),
    http = require('http'),
    io = require('socket.io'),
    port = (4444);
//    port = (process.env.PORT || 4444);

var postRoutes = require('./routes/posts');
var loginRoutes = require('./routes/login');
var andrRoutes = require('./routes/andrtest');

var models = {};
models.databaseModel = require('./models/database/databaseModel');


app.configure(function(){
    app.set('views', __dirname + '/public/views');
    app.set('view options', { layout: false });
    app.set('view engine', 'jade');
    app.use(connect.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: "shhhhhhhhh!"}));
    app.use(connect.static(__dirname + '/public'));
    app.use(app.router);
});


//setup the errors
//app.error(function(err, req, res, next){
//    if (err instanceof NotFound) {
//        res.render('404.jade', { locals: {
//                  title : '404 - Not Found'
//                 ,description: ''
//                 ,author: ''
//                 ,analyticssiteid: 'XXXXXXX'
//                },status: 404 });
//    } else {
//        res.render('500.jade', { locals: {
//                  title : 'The app Encountered an Error'
//                 ,description: ''
//                 ,author: ''
//                 ,analyticssiteid: 'XXXXXXX'
//                 ,error: err
//                },status: 500 });
//    }
//});


// auth TEST
//app.use(express.basicAuth(function(user, pass) {
//  return user === 'test' && pass === 'test';
//}));


// start mongoDB
var mongooseConnection = models.databaseModel.connect();


// httpServer listens express routing
var httpServer = http.createServer(app);


//Setup Socket.IO
var io = io.listen(httpServer);
io.sockets.on('connection', function(socket){
  console.log('Client Connected');
  socket.on('message', function(data){
    socket.broadcast.emit('app_message',data);
    socket.emit('app_message',data);
  });
  socket.on('disconnect', function(){
    console.log('Client Disconnected.');
  });
});


/*
 Authenticates the user, look for the user from db
 TODO: now this is used always, when requests send (bad or good?)
 TODO: does not take socket.io into account
 */
var authMiddleware = express.basicAuth(function(user, pass, cb) {
  var res = user === 'test' && pass === 'test';
  if(res === false) console.log("Auth error!: ERROR: " + res);
  cb(null, res); // cb same as 'next'
});


app.get('/', authMiddleware, function(req,res){
  res.render('index', {title: 'home', description: 'blog page', author: 'me'});
});


app.get('/andr', authMiddleware, andrRoutes.getData);

app.get('/posts', postRoutes.findAll);
app.get('/posts/:id', postRoutes.findById);
app.post('/posts', postRoutes.addPost);
app.put('/posts/:id', postRoutes.updatePost);
app.delete('/posts/:id', postRoutes.deletePost);

app.get('/auth/popover', loginRoutes.popover);
app.get('/auth/signup', loginRoutes.signup);
app.post('/auth/login', loginRoutes.login);


//A Route for Creating a 500 Error (Useful to keep around)
app.get('/500', function(req, res){
  res.status(500).send('This is a 500 Error');
});


//The 404 Route (ALWAYS Keep this as the last route)
app.get('/*', function(req, res){
  res.status(404).send('Not found 404!');
});


//app.get('/', function(req,res){
//  res.render('index.jade', {
//    locals : {
//      title : 'Your Page Title'
//     ,description: 'Your Page Description'
//     ,author: 'Your Name'
//     ,analyticssiteid: 'XXXXXXX'
//    }
//  });
//});

httpServer.listen(port);
//app.listen(port);
console.log('Listening on http://0.0.0.0:' + port );