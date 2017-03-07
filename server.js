"use strict";
var express = require('express')
var app = express();
var http = require('http').Server(app);
var path = require('path');
//var io = require('socket.io')(http);

var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.get('/', function(req, res){
    res.sendFile('index.html', {root: publicPath});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
