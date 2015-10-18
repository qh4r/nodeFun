var through = require('through2');

process.stdin
	.pipe(through(function(buffer, enc, cb){
		this.push(buffer.toString().toUpperCase());
		cb();
	}))
	.pipe(process.stdout);
// 	through opcjonalnie przyjmuje funkcje flush jako drugi argument
// 	, function(done){
// 		done();
// 	}