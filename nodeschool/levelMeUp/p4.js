var level = require('level');

var db = level(process.argv[2]);

var input = JSON.parse(process.argv[3]);

var keys = Object.keys(input);
var counter = 0
keys.forEach(function(key){
	db.put(key, input[key], function(err, res){
		if(!err){
			if(counter++ === keys.length){
				db.close();
				console.log("closed");
			}
		}
	});
});