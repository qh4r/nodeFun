var fs = require('fs'),
	path = require('path');
	
fs.readdir(process.argv[2], function(err, res){
	var filtered = res.filter(function(input){
		return path.extname(input) === '.'+process.argv[3];
	});
	filtered.forEach(function(input){
		console.log(input);
	});
});