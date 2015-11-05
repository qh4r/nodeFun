function asyncFlow(generatorFunction){
	function callback(err){
	console.log(1)
	if(err) {
		return generator.throw(err);
	}

	var results = [].slice.call(arguments, 1);
			console.log('2 args:'+results)
	generator.next(results.length > 1 ? results : results[0]);
		console.log(3);
	};
	var generator = generatorFunction(callback);
			console.log(4);
	generator.next();
};

var fs = require('fs');
var path = require('path');

asyncFlow(function* (callback) {
	var fileName = path.basename(__filename);
			console.log('5 cb:' + callback );
	var myself = yield fs.readFile(fileName, 'utf8', callback);
			console.log('6 myself: '+ myself);
	yield fs.writeFile('clone_of_' + fileName, myself, callback);
	console.log(7);
	console.log('Clone created');
});

// node --harmony_generators --harmony gen.js