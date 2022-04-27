var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var [n1,n2,n3] = prompt("x").split(" ").map(Number);
var perimetro = n1 + n2 +n3;
var area = ((n1 + n2)*n3)/2
if (n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1){
    console.log("Perimetro = " + perimetro.toFixed(1));
    
}
else {
    console.log("Area = " + area.toFixed(1));
}
