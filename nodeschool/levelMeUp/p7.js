module.exports = function(db, date, callback){
	var counter = 0;
	db.createReadStream({gte: date})
		.on('data', function(data) {
			counter++;
		})
		.on('end', function() {
			callback(null,counter);
		})
		.on('error', function(err){
			callback(err);
		});
}