var through2 = require('through2'),
	trumpetLib = require('trumpet');
	trumpet = trumpetLib();
process.stdin.pipe(trumpet);
	trumpet.selectAll('.loud', function(loud){
		var str = loud.createStream();
		str.pipe(through2(function(buffer, enc, next){
			this.push(buffer.toString().toUpperCase());
			next();
		})).pipe(str);
	});
	trumpet.pipe(process.stdout);
