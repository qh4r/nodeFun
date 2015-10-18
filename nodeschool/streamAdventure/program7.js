var http = require('http'),
	through = require('through2');
	
http.createServer(function(req, res){
	res.writeHead('200',{'Content-Type': 'text/plain'});
	req
	.pipe(through(function(buffer, enc, cb){
		this.push(buffer.toString().toUpperCase());
		cb();
	}))
	.pipe(res);
}).listen(process.argv[2]);