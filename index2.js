var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});

http.listen(2222, function(){
  console.log('listening on *:2222');
});
