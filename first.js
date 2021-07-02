var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('Hello world');
}).listen(8081);

console.log('server connected');