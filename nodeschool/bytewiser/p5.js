var fs = require('fs');
var stream = require('stream');
var writable = new stream.Writable();
writable.buffer = [];
writable._write = function(chunk, encoding, next) {
  	this.buffer.push(chunk);
    next();
  }
process.stdin.pipe(writable);

process.stdin.on('end', function(){
	console.log(Buffer.concat(writable.buffer));
})