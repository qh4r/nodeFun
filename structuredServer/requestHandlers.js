var exec = require("child_process").exec;

function start(response) {
    exec("find /",
        {timeout: 10000, maxBuffer: 20000 * 1024},
        function (error, stdout, stderr) {
            response.writeHead(200, {"Content-type": "text/plain"});
            response.write(stdout);
            response.end();
            console.log("start");
        });
}

function upload(response) {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<html><head><title>upload</title></head><body><h1>upload response test</h1></body></html>");
    response.end();
    console.log("upload");
}

function error404(response) {
    response.writeHead(404, {"Content-type": "text/html"});
    response.write("<html><head><title>404</title></head><body><h1>no such route</h1></body></html>");
    response.end();
    console.log("upload");
}

exports.start = start;
exports.upload = upload;
exports.error404 = error404;
