#!/usr/bin/node
var file = require("fs");

file.readFile("server.j", (error, output) => {
	if (error) {
		console.error(error);
	} else {
		console.log(output.toString());
	};
});
