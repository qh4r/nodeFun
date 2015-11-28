var level = require('level'),
	db = level(process.argv[2]);
	
db.createReadStream()
	.on('data',function(data){
		console.log("%s=%s", data.key, data.value);
	})
	.on('end', function(){console.error('over')});