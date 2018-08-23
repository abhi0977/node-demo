
// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();
var app1 = express();
var sockettemp;
// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(3000);
var server1 = app1.listen(4000);

app.use('/', express.static('public'))

app.use('/static', express.static('p2'))

var io = require('socket.io');

localhost:3000/2736/gameon
localhost:3000/2736/gameon/play

// WebSocket Portion
// WebSockets work with the HTTP server
var io1 = require('socket.io')(server1);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.on('connection',
  // We are given a websocket object in our function
  function (socket) {
sockettemp = socket
    console.log("We have a new client: " + socket.id);
  
    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('/2736/gameon',
      function(data) {
        // // Data comes in as whatever was sent, including objects
        // console.log("Received: 'mouse' " + data.x);
      
        // // Send it to all other clients
        // socket.broadcast.emit('mouse', data);
        
        // // This is a way to send to everyone including sender
        // // io.sockets.emit('message', "this goes to everyone");

      }
    );
  }
);


io1.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {


    console.log("We have a vary new client: " + socket.id);
  
    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('xyz',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'mouse' " + data.x);
      
        // Send it to all other clients
        // socket.broadcast.emit('mouse', data);
        
        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

      }
    );
  }
);

functionsdkfj()
sockettemp.broadcast
{}