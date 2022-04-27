var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto){return lines.shift();};

var valor = parseInt(prompt("x"));

function notas(x) {
    var nota = parseInt(valor/ x );
    valor = valor - (nota * x);
    return nota
  }
    
    
console.log(valor+ "");
console.log(notas(100) + " nota(s) de R$ 100,00");
console.log(notas(50) + " nota(s) de R$ 50,00");
console.log(notas(20) + " nota(s) de R$ 20,00");
console.log(notas(10) +" nota(s) de R$ 10,00");
console.log(notas(5) + " nota(s) de R$ 5,00");
console.log(notas(2) + " nota(s) de R$ 2,00");
console.log(notas(1) + " nota(s) de R$ 1,00");
            
