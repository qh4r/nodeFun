var fs = require('fs');
	level = require('level'),
	db = level(process.argv[2]);
	
function processFile(err, result){
	if(err){
	console.log(err);
		return;
	}
// 	console.error(result.toString());
	var batch = []
	result.toString().split('\n').forEach(function(line){
		var lineArray = line.split(',');
//DEL IGNORES VALUE ARG
// 		if(lineArray.length > 2){
			batch.push({type: lineArray[0], key: lineArray[1], value: lineArray[2]});
// 		} else {
// 			batch.push({type: lineArray[0], key: lineArray[1]});
// 		}
	});
	db.batch(batch)
}	
	
fs.readFile(process.argv[3], processFile);