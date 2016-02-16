var lineBreak = '\n'.charCodeAt(0);
var fs = require('fs');
fs.readFile(process.argv[2], function(err, buffer){
	var i = 0;
	while(buffer.length) {
		if(buffer[i] === lineBreak || i > buffer.length){
			var dump = buffer.slice(0,i);
			console.log(dump);
			buffer = buffer.slice(i+1);
			i = 0;
		}
		i++;
	}
});