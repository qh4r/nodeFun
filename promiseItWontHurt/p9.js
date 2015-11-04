var q = require('q');

var deferrer1 = q.defer();
var deferrer2 = q.defer();

function all(promise1, promise2){
	var d = q.defer();
	var counter = 0, arr = [];
	promise1.then(function(x){
		counter += 1;
		arr.push(x);
		if(counter === 2){
			d.resolve(arr);
		}
	}).then(null, function(e){
		d.reject(e);
	});
	promise2.then(function(x){
		counter += 1;
		arr.push(x);
		if(counter === 2){
			d.resolve(arr);
		}
	}).then(null, function(e){
		return d.reject(e);
	});	
	
	return d.promise;
}

all(deferrer1.promise, deferrer2.promise).then(console.log);
// .spread wypisuje pokolei osobno zamiast tablicy

setTimeout(function(){
	deferrer1.resolve("PROMISES");
	deferrer2.resolve("FTW");
},200);