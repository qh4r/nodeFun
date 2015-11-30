module.exports = function(db, date, callback){
	var results = [];
	var begean = date;

	var newDate = new Date(date);
	newDate.setDate(newDate.getDate()+1);
	//alternatywa z rozwiazania
	// db.createReadStream({ start: day, end: day + '\xff' })
	db.createReadStream({gte: date, lt: newDate.toISOString()})
		.on('data', function(data) {
			results.push(data.value);
		})
		.on('end', function() {
			callback(null,results);
		})
		.on('error', function(err){
			callback(err);
		});
}