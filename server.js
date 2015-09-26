var http = require('http');

http.createServer(function (req, res) {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Root dir hi\n');
    }
    else if(req.url === '/qh4r'){
        res.writeHead(403, {'Content-Type': 'text/plain'});
        res.end('Unauthorized\n');
    }
    else if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home page\n');
    }
    else if(req.url === '/user'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('user page\n');
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('no page');
    }


    console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');