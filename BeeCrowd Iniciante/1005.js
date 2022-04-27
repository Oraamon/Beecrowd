var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var x = parseFloat(prompt("x"));
var y = parseFloat(prompt("y"));
var a = x * 3.5;
var b = y * 7.5;


var m =  parseFloat((a + b )/ 11);

console.log("MEDIA = " + m.toFixed(5));
