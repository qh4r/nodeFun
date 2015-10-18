var fs = require('fs'),
	path = require('path');
	
module.exports = function(pwd, ext, cb){
	if(!pwd || !ext) return cb(new Error('no data'));
	fs.readdir(pwd, function(err, res){
		if(err) return cb(err);
		
		var filtered = res.filter(function(input){
			return path.extname(input) === '.'+ext;
		});
		cb(null, filtered);
	});
};