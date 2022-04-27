var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var [a,b,c] = prompt("x").split(" ").map(Number)

if(a >= (b+c) || b >= (a+c) || c >= (a+b))
    console.log("NAO FORMA TRIANGULO")

else if(a*a == (b*b + c*c) || b*b == (a*a + c*c) || c*c == (a*a + b*b)){
    console.log("TRIANGULO RETANGULO")
}
else if(a*a > (b*b + c*c) || b*b > (a*a + c*c) || c*c > (a*a + b*b)){
    console.log("TRIANGULO OBTUSANGULO")
}
else if(a*a < (b*b + c*c) || b*b < (a*a + c*c) || c*c < (a*a + b*b)){
    console.log("TRIANGULO ACUTANGULO")
}
if(a == b && a == c){
    console.log("TRIANGULO EQUILATERO")
}
if((a == b && a !== c)  || (a == c && a !== b) || (b == c && b !== a)){
    console.log("TRIANGULO ISOSCELES")
}

