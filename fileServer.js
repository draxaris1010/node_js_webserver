#!/data/data/com.termux/files/usr/bin/node
var file = require("fs");
var http = require("http");
const port = 8080;
http.createServer((request, response) => {
	file.readFile('.' + request.url, (error, data) => {
		if (error) {
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.end("404, not found");
		} else {
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.end(data.toString());
		}
	})
}).listen(port);

console.log("Server started at port " + port);
