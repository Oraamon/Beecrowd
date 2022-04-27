var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto){return lines.shift();};

var horas = parseInt(prompt("horas"));
var velocidade = parseInt(prompt("horas"));


var distancia = (horas * velocidade);

var litros = (distancia/12);

console.log(litros.toFixed(3));
