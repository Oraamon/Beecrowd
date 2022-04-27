var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var R = parseFloat(prompt("Valor"));

var pi = 3.14159;
var A = (pi * R * R);

console.log("A=" + A.toFixed(4));
