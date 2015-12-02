function getKey(word, length){
	return length + "!" + word;
}

module.exports.init = function(db, words, callback){
	var counter = 0;
	words.forEach(function(word){
// 	word.concat(fillArray[word.length])
		db.put(getKey(word, word.length),word, function(err){
			counter++;
			if(words.length === counter){
				callback();
			}
		})
	});
};

module.exports.query = function(db, word, callback){
	var rx = /\*/g,
		length = word.length,
	 	word = word.replace(rx, ""),
	 	output = [];
	console.error(getKey(word));
	db.createReadStream({gte: getKey(word, length), lte: getKey(word, length)+"\xff"})
		.on("data", function(data){
			output.push(data.value);
		})
		.on("end", function(){
			callback(null, output);
		})
		.on("error", function(err){
			callback(err);
		});
};