var _ = require('lodash');

var worker = function(items){
	var average = _.sum(items, function(item){
		return item.income;
	}) / items.length;
	return {
	average: average,
	underperform: _(items).filter(function(item){
		return item.income <= average;
	}).sortBy('income').value(),
	overperform: _(items).filter(function(item){
		return item.income > average;
	}).sortBy('income').value()	
	}
}

module.exports = worker;