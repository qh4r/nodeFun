var lineBreak = '\n'.charCodeAt(0);
var fs = require('fs');
fs.readFile(process.argv[2], function(err, buffer){
	var i = 0;
	dump = new Buffer('');
	while(buffer.length) {
		if(buffer[i] !== lineBreak){
			dump.write(''+buffer[i]);
		} else {
			console.log(dump.toString());
			dump = new Buffer('');
			buffer = buffer.slice(i+1);
			i = 0;
		}
		i++;
	}
});