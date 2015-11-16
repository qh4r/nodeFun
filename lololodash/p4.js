var _ = require('lodash');

var worker = function(items){
	var hot = [], warm = [];
	_.forEach(items, function(city, i, collection){					
		if(_.every(city, function(x) {
			return x > 19; 
		})) {
			hot.push(i);
		} else if(_.some(city, function(x){
				return x > 19;
			})) {
				warm.push(i);
			}
		});
		return {
			hot: hot,
			warm: warm,
		}
}

module.exports = worker;