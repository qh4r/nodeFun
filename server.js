var http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Root dir hi\n');
    } else if (req.url === '/qh4r') {
        res.writeHead(403, {'Content-Type': 'text/plain'});
        res.end('Unauthorized\n');
    } else if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home page\n');
    } else if (req.url === '/user') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('user page\n');
    } else if (req.url === '/html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><head><title>strona html</title></head><body><h1>naglowek</h1><p>paragraf</p><hr /><br /> <b>stopka boldem</b></body></html>\n');
    } else if (req.url === '/post') {
        console.log(req.method);
        if (req.method == 'POST') {
            var upload = "";
            req.on('data', function(chunk){
                upload += chunk;
                console.log(chunk);
            });
            req.on('end', function(){
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end('<html><head><title>uplaod</title></head><body><h2>upload udany <a href="/post">wrzuc kolejny</a> </h2><br /> <p>'+upload.length+'</p> <br /> <p>'+upload+'</p> </body></html>\n');
                console.log('file uploaded');
            })
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('<html><head><title>UPLOADZ!</title><body><form action="/post" method="POST" enctype="multipart/form-data"><input type="file" name="the_file"><input type="submit" value="Upload">');
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('no page');
    }


    console.log(req.url);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');