var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto){return lines.shift();};


var x = parseInt(prompt("x"));
var y = parseFloat(prompt("x"));
var consumo = x/y;



console.log( consumo.toFixed(3) + " km/l" );
