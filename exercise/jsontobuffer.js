//A string to buffer to JSON and back to buffer and back to string.

"use strict";

let buf = new Buffer('This is my pretty example.');
let json = JSON.stringify(buf);

let buf2 = new Buffer(JSON.parse(json).data);

console.log(buf2.toString());

/*
Result:
This is my pretty example.
*/
