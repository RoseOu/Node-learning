//Print "Hello World"

var http=require('http');

http.createServer(function (request,response){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("Hello World\n");
}).listen(8124);

console.log('Server running at port 8124/');
