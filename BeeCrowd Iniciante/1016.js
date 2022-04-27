var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto){return lines.shift();};

var x = parseInt(prompt("x"));

var tempo = (x / 30) * 60;

console.log(tempo + " minutos")
