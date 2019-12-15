#!/data/data/com.termux/files/usr/bin/node
const port = 8080;
var http = require("http");
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>Hello world!</h1>');
	response.end(request.url);
	console.log(request + '\n\n');
	console.log(response + '\n\ndone\n\n');
}).listen(port);

console.log('Server started and listening on port ' + port + '.');

