//set up express server

var express = require('express'); //framework

var app = express();

var http = require('http').Server(app); //server

app.get('/', function(req, res){
  res.send('<h1>YO</h1><p>I am JZ</p><br></br><p>Look ^^^ empty line</p>');
});

http.listen(2222, function(){
  console.log('listening on *:2222');
});