var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var a = parseFloat(prompt("a"));
var b = parseFloat(prompt("b"));
var c = parseFloat(prompt("c"));

var A = a * 2;
var B = b * 3;
var C = c * 5;

var m = (( A + B + C )/10);

console.log("MEDIA = " + m.toFixed(1));
