var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var x = prompt("x");
var y = parseFloat(prompt("y"));
var z = parseFloat(prompt("z"));

var TOTAL = y + (z * 0.15);

console.log("TOTAL = " + "R$ " + TOTAL.toFixed(2));
