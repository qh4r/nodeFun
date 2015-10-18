var http = require('http');

http.createServer(function(req, res){
	var result = '';
	req.on('data', function(data){
		result += data;
	})
	.on('end', function(){
		res.end(result.toUpperCase());
	});
	
}).listen(process.argv[2]);