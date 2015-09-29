/**
 * Created by qh4r on 27.09.15.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {

    http.createServer(function (request, response) {
        var path = url.parse(request.url).pathname;

        request.setEncoding("utf-8");

        var postData = "";

        request.on("data", function (chunk) {
            postData += chunk;
        })

        request.on("end", function () {
            route(handle, path, response, postData);
        });
        //response.writeHead(200, {"Content-Type": "text/plain"});
        //response.write("Request for path -> "+path);
        //response.end();
    }).listen(8888);
}

exports.start = start;