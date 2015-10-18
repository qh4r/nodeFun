var net = require('net'),
	strftime = require('strftime');
	
net.createServer(function(soc){
	soc.write(strftime('%Y-%m-%d %H:%M\n'));
	soc.end();
}).listen(process.argv[2]);

