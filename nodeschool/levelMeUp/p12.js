var level = require('level'),
	multilevel = require('multilevel'),
	net = require('net');
	
var db = multilevel.client();

var connection = net.connect(4545);

connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup',function(err, result){
	if(!err){
		console.log(result);
		connection.end();
	}
});