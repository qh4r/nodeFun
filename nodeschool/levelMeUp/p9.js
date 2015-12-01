var level = require('level'),
	fs = require('fs'),
	db = level(process.argv[2]);
	
fs.readFile(process.argv[3], "utf-8", function(err, data){
	var onWrite = function(err) {
		if(err){
			return console.error(err);
		}			
		if(counter++ === json.length) {
			db.close();
		}
	}
	
	if(err){
		return console.error(err);
	}
	var json = JSON.parse(data), counter = 0;
	json.forEach(function(item){
		if(Object.keys(item).length > 2){
			console.error(item)
			db.put(item.user+'!'+item.name, JSON.stringify(item), onWrite);
		} else {
			db.put(item.name, JSON.stringify(item), onWrite);
		}
	});
});