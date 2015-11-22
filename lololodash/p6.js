var _ = require('lodash');

var worker = function(items){
	return _(items).groupBy('username')
	.map(function(user) {
		return {
			username: user[0].username,
			comment_count: _.size(user)
		}	
	})
	.sortBy(function(x){
		return -x.comment_count;
	})
	.value();
	//could use reverse() with sortBy('comment_count')
}

module.exports = worker;