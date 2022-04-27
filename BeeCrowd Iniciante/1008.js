var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt("x"));
var y = parseInt(prompt("y"));
var z = parseFloat(prompt("z"));


var m =   z * y;

console.log("NUMBER = " + x);
console.log("SALARY = " + ("U$ ")+ m.toFixed(2));
