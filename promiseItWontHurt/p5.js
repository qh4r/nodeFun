var q = require('q');

var deferrer = q.defer();

deferrer.promise
	.then(function(x){return "DR. "+x})
	.then(console.log);
	
deferrer.resolve('MANHATTAN');