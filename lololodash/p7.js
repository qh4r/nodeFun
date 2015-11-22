var _ = require('lodash');

var worker = function(items){
	var output = [];	
	_(items).reduce(function(sum, item, key){
	if(!sum.length){
		var out = [];
		out[sum.article] = sum.quantity;
		sum = out;
	}
	sum[item.article] = sum[item.article] || 0;
 	sum[item.article] += item.quantity;
 	return sum;
	}) 
	.map(function(item, key){
		return {article: key, total_orders: item};
	})
	.filter(function(x){
		return x != undefined;
	})
 	.reverse()
 	.forEach(function(x){
 		output.push(x);
 	})
	return output;
}

module.exports = worker;