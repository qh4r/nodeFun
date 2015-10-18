var through = require('through2'),
	split = require('split');
var lineCount = 0;
process.stdin
	.pipe(split(/\n/))
	.pipe(through(function(buffer, enc, cb){
		lineCount += 1;
		this.push((lineCount % 2 ? buffer.toString().toLowerCase() : buffer.toString().toUpperCase()) + '\n');
		cb();
	}))
	.pipe(process.stdout);