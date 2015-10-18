var http = require('http');

http.get(process.argv[2], function(res){
	var result = '';
	res.setEncoding('utf8')
		.on('data', function(data){
			result += data;
		})
		.on('end', function(){
			console.log(result.length);
			console.log(result);
		});
});