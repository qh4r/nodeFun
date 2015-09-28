/**
 * Created by qh4r on 27.09.15.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {

    http.createServer(function (request, response) {
        var path = url.parse(request.url).pathname;
        route(handle, path);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Request for path -> "+path);
        response.end();
    }).listen(8888);
}

exports.start = start;