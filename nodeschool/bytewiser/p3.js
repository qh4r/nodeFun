process.stdin.on('data',function(data){
	for(var i = 0; i<data.length; i++){
		if(data[i] === 46){
			data.write('!',i,'utf8');
		}
	}
	console.log(data);
});

//fajne
 var DOT = '.'.charCodeAt(0), BANG = '!'.charCodeAt(0)