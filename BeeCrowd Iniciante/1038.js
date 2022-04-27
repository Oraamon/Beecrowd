var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var prompt = function(texto) { return lines.shift();};

var [A,B] = prompt("a").split(" ").map(Number);

switch(A){
 case 1:
    A = 4.00
   break;
 case 2:
  A = 4.50
    break;
 case 3:
   A = 5.00
    break;
   case 4:
   A = 2.00
    break;
   case 5:
  A = 1.50
   break;
   default:
   A = 0
}
var valor =(A * B)

console.log("Total: R$ " + valor.toFixed(2))
