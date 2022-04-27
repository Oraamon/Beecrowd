var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var y = (prompt("y"));
var z = (prompt("z"));

var a = y.split(" ")

var b = z.split(" ")



var TOTAL =parseFloat(a[1]) * parseFloat(a[2]) +parseFloat(b[1]) * parseFloat(b[2])

console.log("VALOR A PAGAR: R$ " + TOTAL.toFixed(2))
