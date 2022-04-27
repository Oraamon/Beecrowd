var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var [n1,n2] = prompt("x").split(" ").map(Number)

if (n2%n1 == 0 || n1 % n2 == 0){
   console.log("Sao Multiplos")
}
else{
    console.log("Nao sao Multiplos")
}
