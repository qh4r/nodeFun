var http = require('http'),
	url = require('url');
	
http.createServer(function(req, res){
	var reqUrl = url.parse(req.url, true);
	var date = new Date(reqUrl.query.iso);
	res.writeHead('200', {'Content-Type' : 'application/json'});
	if(/parsetime/.test(reqUrl.pathname)){
		var time = {
			hour: date.getHours(),
			minute: date.getUTCMinutes(),
			second: date.getUTCSeconds()
		}
		res.end(JSON.stringify(time));
	} else if(/unixtime/.test(reqUrl.pathname)) {
		var timestamp = {
			unixtime : date.getTime()
		}
		res.end(JSON.stringify(timestamp));
	}
}).listen(process.argv[2]);