var q = require('q');

var parsePromised = function(){
	var deferrer = q.defer();
	try{
// 		console.log(1);
		var result = JSON.parse(process.argv[2]);
// 		console.log(2);
		deferrer.resolve(result);
	} catch(e){
// 		console.log(3);
		deferrer.reject(e);
	}
// 		console.log(4);
	return deferrer.promise;
}

parsePromised().then(console.log).then(null,console.log);;