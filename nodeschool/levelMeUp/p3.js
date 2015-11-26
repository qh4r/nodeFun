var level = require('level')

var db = level(process.argv[2]);

for(var i = 0; i<=100; i++){
	(function(number){
	db.get("key"+i, function(err, result){
		if(!err){
			console.log("key"+number+'='+result);
		}
	});
	})(i);
}