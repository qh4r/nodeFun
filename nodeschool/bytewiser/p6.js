    var buffers = [];
    
    process.stdin.on('readable', function() {
      var chunk = process.stdin.read();
      if (chunk !== null) {
        buffers.push(chunk);
      }
    });
    
    process.stdin.on('end', function() {
	   	var array = new Uint8Array(Buffer.concat(buffers))
	   	console.log(JSON.stringify(array));
    });
