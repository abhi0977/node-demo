// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
var socket;

function optionA(){
  sendData("A");
}

function optionB(){
  sendData("B");
}

function optionC(){
  sendData("C");
}

function optionD(){
  sendData("D");
}

function setup() {
  socket = io.connect('localhost:3000');
}



// // Function for sending to the socket
function sendData(ans) {
//   // We are sending!
  console.log("sendmouse: " + ans);
  
  var data = {
    x: ans
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}
