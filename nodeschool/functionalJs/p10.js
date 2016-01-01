    module.exports = function(namespace) {
		var logger = console.log.bind(null, namespace);
		return function(){			
			logger.apply(null, Array.prototype.slice.call(arguments));
		}
    }