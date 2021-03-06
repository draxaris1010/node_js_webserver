#!/usr/bin/node
var file = require("fs");
var http = require("http");
var mime = require("mmmagic");
const port = 8080;
var Magic = mime.Magic;
var magic = new Magic(mime.MAGIC_MIME_TYPE);

http.createServer((request, response) => {
   file.readFile('.' + request.url, (error, data) => {
      if (error) {
         response.writeHead(404, {
            'Content-Type': 'text/plain'
         });
         response.end("404, not found");
         console.log(request.toString() + '\n\n');
         console.log(response.toString() + '\n\ndone\n\n');
      } else {
         // detect mime type
         magic.detectFile('.' + request.url, (error, result) => {
            if (error) {
               response.writeHead(500, {
                  'Content-Type': 'text/plain'
               });
               response.end("500, :( check the server");
               console.log("Invalid file requested: " + "." + request.url);
               console.log(request.toString() + '\n\n');
               console.log(response.toString() + '\n\ndone\n\n');
            } else {
               response.writeHead(200, {
                  'Content-Type': result
               });
               response.end(data.toString());
               console.log(request.toString() + '\n\n');
               console.log(response.toString() + '\n\ndone\n\n');
            }
         });
      }
   });
}).listen(port);

console.log("Server started at port " + port);
