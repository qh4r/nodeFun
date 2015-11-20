var _ = require('lodash');

var worker = function(items){
	return _.chain(items).map(function(x){
		return (x + "Chained").toUpperCase();
	}).sortBy().value()
}

module.exports = worker;