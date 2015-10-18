var concat = require('concat-stream');

var concatStream = concat(function(string){
	process.stdout.write(string.toString().split('').reverse().join(''))
});

process.stdin
	.pipe(concatStream)
	