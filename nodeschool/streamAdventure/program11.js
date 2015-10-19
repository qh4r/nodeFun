var spawn = require('child_process').spawn,
	duplexer = require('duplexer2');

module.exports = function(cmd, args){
	var newProcess = spawn(cmd, args);
	return duplexer({},newProcess.stdin, newProcess.stdout);
}
