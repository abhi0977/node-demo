var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var userCount = 0;
server.listen(3000);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/play', function (req, res) {
  res.sendFile(__dirname + '/play/index.html');
});

io.on('connection', function (socket) {
  console.log("Connected",socket.id);

  socket.on('join', function (data) {
    //send the number of user count to client dashboard
    
    console.log("user joined with email : ", data.email);
    socket.join(data.email);
    if(data.email === "server"){}
    else{
      io.sockets.in('server').emit('count', { count: ++userCount });
    }

  });

  socket.on('send', function (data) {
    console.log("user " + data.email + " sent the ans : " + data.ans);
    io.sockets.in(data.email).emit('ans', {ans: data.ans === 'C'});
  });


  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});