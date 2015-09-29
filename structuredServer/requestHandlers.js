//var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response) {
    //exec("find /",
    //    {timeout: 10000, maxBuffer: 20000 * 1024},
    //    function (error, stdout, stderr) {
    //        response.writeHead(200, {"Content-type": "text/plain"});
    //        response.write(stdout);
    //        response.end();
    //        console.log("start");
    //    });
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
            response.writeHead(200, {"Content-type": "text/html"});
            response.write(body);
            response.end();
            console.log("start");
}

function upload(response, postData) {
    postData = postData || "text=no data";
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<html><head><title>upload</title></head><body><h1>post data:</h1><br /> <p>" + querystring.parse(postData).text +"</p></body></html>");
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
