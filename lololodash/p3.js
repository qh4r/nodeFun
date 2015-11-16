var _ = require('lodash');

var worker = function(items){
	return _.forEach(items, function(item){
		item.size = item.population > 1 ? "big" : item.population > 0.5 ? "med" : "small";
	});
}

module.exports = worker;