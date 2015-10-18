require('./subProgram6')(process.argv[2], process.argv[3], function(err, res){
	if(err) return console.log(err);
	res.forEach(function(input){
		console.log(input);
	});
})
