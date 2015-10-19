var crypto = require('crypto'),
	tar = require('tar'),
	zlib = require('zlib'),
	through = require('through2');
	
	
var deciper = crypto.createDecipher(process.argv[2], process.argv[3]);

var tarParser = tar.Parse();

tarParser.on('entry', function(entry){
var hash = crypto.createHash('md5', { encoding: 'hex' });
if(entry.type === 'File'){
	entry.pipe(hash)
	.pipe(through(function(buffer, _,next){
		this.push(buffer.toString()+" "+entry.path+"\n");
	})).pipe(process.stdout);
	}
})

process.stdin.pipe(deciper).pipe(zlib.createGunzip()).pipe(tarParser);

