var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt("x"));
var y = parseInt(prompt("y"));
var PROD = x * y;

console.log("PROD = " + PROD);
