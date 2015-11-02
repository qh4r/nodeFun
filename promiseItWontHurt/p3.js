var q = require('q');
var deferred = q.defer();

deferred.promise.then(console.log, console.log);

setTimeout(function(err){
	if(err){
		return deferred.reject("I DID NOT FIRE");
	}	
	return deferred.resolve("I FIRED");
}, 300);