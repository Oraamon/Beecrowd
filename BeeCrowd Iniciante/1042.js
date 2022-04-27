var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var [n1,n2,n3] = prompt("x").split(" ").map(Number);
var valores = [n1,n2,n3]
var crescente = [];
var decrescente = [];
function highest(valores)
{ 
  return valores.sort(function(a,b)
  { 
    if (a > b) return 1; 
    if (a < b) return -1; 
    return 0;
  }); 
}

function lowest(valores)
{ 
  return valores.sort(function(a,b)
  { 
    return b - a; 
  }); 
}

crescente = highest(valores)
decrescente = lowest(valores)

console.log(crescente[0])
console.log(crescente[1])
console.log(crescente[2])

console.log("")

console.log(n1)
console.log(n2)
console.log(n3)


