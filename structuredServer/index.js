var server = require('./server');
var router = require('./router');

var handlers = require('./requestHandlers');

var handle = {};

handle['/'] = handlers.start;
handle['/start'] = handlers.start;
handle['/upload'] = handlers.upload;
handle['/show'] = handlers.show;
handle['404'] = handlers.error404;

server.start(router.route, handle);