var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto){return lines.shift();};

var valor = parseInt(prompt("x"));

horas = parseInt(valor / 3600)
valor = valor - (horas * 3600)
minutos = parseInt(valor / 60)
valor = valor - (minutos * 60)
seg = parseInt(valor / 1)
valor = valor - (seg * 1)
    
    
    
    console.log(horas + ":"+ minutos+ ":" +seg);
      
