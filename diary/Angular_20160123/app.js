/**
** app.js module
**/
var http = require('http'),
	express = require('express'),
	app = express(),
	server = http.createServer(app),
	fs = require('fs'),
	mongodb = require('mongodb'),
	mongoClient = mongodb.mongoClient,
	makeMongoId = mongodb.ObjectId,
	crud = require('./crud.js'),
	url = 'mongodb://127.0.0.1/contact';

//begin watch
fs.watch('./', function(event, filename) {
  console.log('event is: '+event);
  if (filename) {
    console.log('filename provided:'+ filename);
  } else {
    console.log('filename not provided');
  }
}); 
app.use(express.static(__dirname + '/wfte'));
// e
mongoClient.connect(url,function(err,db){
	console.log('mongodb is successfully connect!!!');
	app.get('/',function(req,res){
		res.redirect('/index.html');
	});
	app.all('/:obj_type/*?',function(req,res,next){
		res.contentType('json');
		next();
	});												
	app.get('/:obj_type/list',function(req,res){
		res.send(":obj_type/list");
	});
	app.get('/:obj_type/read/:id([0-9]+)',function(req,res){
		res.send("the id is"+req.params.id+" with "+ req.params.obj_type +" found !");
	});
	app.get('/:obj_type/create/:id([0-9]+)',function(req,res){
		res.send("create :obj_type");
	});
	app.post('/:obj_type/update/:id([0-9]+)',function(req,res){
		res.send("update :obj_type");
	});
	app.get('/:obj_type/delete/:id([0-9]+)',function(req,res){
		res.send("delete :obj_type");
	});
});
server.listen(3000);
console.log("the server is listening on port %d in %s mode",
 server.address().port,app.settings.env);
