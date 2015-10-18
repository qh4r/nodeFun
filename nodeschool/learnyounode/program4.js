var fs = require('fs');

fs.readFile(process.argv[2], function(err, res){
	var data = res.toString();
	console.log(data.split(/\n./).length - 1);
});