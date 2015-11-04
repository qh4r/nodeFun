var q  = require('q');

var parsePromised = function(){ 
	return q.fcall(function(){
		try{
			var result = JSON.parse(process.argv[2]);
		} catch(e){
			throw e;
		}
		return result;
	});
	}



parsePromised().then(null,console.log);