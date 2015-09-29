//var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require('fs')
var formidable = require('formidable');


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
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input name="upload" multiple="multiple"  type="file"/>'+
        '<input type="submit" value="upload" />'+
        '</form>'+
        '</body>'+
        '</html>';
            response.writeHead(200, {"Content-type": "text/html"});
            response.write(body);
            response.end();
            console.log("start");
}
//SIMPLE POST
//function upload(response, postData) {
//    postData = postData || "text=no data";
//    response.writeHead(200, {"Content-type": "text/html"});
//    response.write("<html><head><title>upload</title></head><body><h1>post data:</h1><br /> <p>" + querystring.parse(postData).text +"</p></body></html>");
//    response.end();
//    console.log("upload");
//}

function upload(response, request) {
    //console.log(request);
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files){
        console.log(files);
        fs.rename(files.upload.path , "./tmp/img.png", function(error){
            if(error){
                fs.unlink("./tmp/img.png");
                fs.rename(files.upload.path, "./tmp/img.png");
            }
        });
    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();

    console.log("upload");
}

function show(response) {
        response.writeHead(200, {"Content-type": "image/png"});
        fs.createReadStream("./tmp/img.png").pipe(response);
        console.log("show");
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
exports.show = show;
