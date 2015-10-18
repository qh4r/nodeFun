var http = require('http');
function processRequest(argNr){
	var result = '';
	http.get(process.argv[argNr], function(res){
		res.setEncoding('utf8')
			.on('data', function(data) { result += data;})
			.on('error', console.error)
			.on('end', function() {
				console.log(result);
				var next = process.argv[argNr+1]
				if(next) return processRequest(argNr+1);
			});
	});
	}
processRequest(2);
