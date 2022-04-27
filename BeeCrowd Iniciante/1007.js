var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var a = parseFloat(prompt("a"));
var b = parseFloat(prompt("b"));
var c = parseFloat(prompt("c"));
var d = parseFloat(prompt("d"));

var DIFERENCA = (a * b) - (c * d);

console.log("DIFERENCA = " + parseInt(DIFERENCA));
