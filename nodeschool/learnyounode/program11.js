var http = require('http'),
	fs = require('fs');

http.createServer(function(req, res){
	var stream = fs.createReadStream(process.argv[3]);
	stream.pipe(res);
}).listen(process.argv[2]);