var q = require('q');
var deferred = q.defer();

deferred.promise.then(console.log).fail(function(err){
	console.log(err.message);
});
setTimeout(function(err, input){
		if(err){ 
			return deferred.reject(err);
		}
		return deferred.resolve(input);
	}, 300, new Error('REJECTED!'));

//shorter	
//setTimeout(deferred.reject, 300, new Error('RESOLVED!'));