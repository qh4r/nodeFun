var _ = require('lodash');

var worker = function(items){
	return _.template("Hello <%= name %> (logins: <%= logins %>)")({ name: items.name, logins: items.login.length});
}

module.exports = worker;