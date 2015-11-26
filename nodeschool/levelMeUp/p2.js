var level = require('level');

var db = level(process.argv[2]);

db.get(process.argv[3], function(err, result){
	if(err){
	 throw err
	}
	console.log(result);
})