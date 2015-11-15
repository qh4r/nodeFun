var _ = require('lodash');

var worker = function(list){
	return _.where(list, {active: true});
}

module.exports = worker;