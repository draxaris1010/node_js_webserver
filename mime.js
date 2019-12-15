#!/usr/bin/node
var mime = require("mmmagic");
var Magic = mime.Magic;

var magic = new Magic(mime.MAGIC_MIME_TYPE);
magic.detectFile("./file.html", (error, result) => {
	if (error) throw error;
	console.log(result);
});
