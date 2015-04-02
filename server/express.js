var express = require('express');
var app = express();
/*
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

app.use(express.static(__dirname + '/'));

app.listen(3002);

app.get('/', function(req, res, next) {
  return "hello world";
});*/

app.listen(3000); //the port you want to use

app.use(express.static(__dirname + '/'));
