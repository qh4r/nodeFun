var q = require('q');
var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
// 	.then(function(x){return x.toString()}).then(function(x){return JSON.parse(x)}).then(console.log)
	.then(function(x){return x.toString();})
	.then(function(x){return qhttp.read('http://localhost:7001?id='+x)})
	.then(JSON.parse)
	.then(console.log)
	.then(null,console.log)
	.done();
// 	.then(null,function(x){console.log(JSON.parse(x.toString()))});