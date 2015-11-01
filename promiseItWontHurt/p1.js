var q = require('q');

(function(){
	var deferred = q.defer();
	setTimeout(function(){
		return deferred.resolve("RESOLVED!");
	}, 3000);
	return deferred.promise;
})().then(console.log);

