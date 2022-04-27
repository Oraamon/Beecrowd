var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A,B,C] = lines.shift().split(" ").map(Number);
var pi =3.14159;
var at = (A*C)/2;
var circulo = Math.pow(C,2)*pi;
var tr = ((A+B)*C)/2
var q = Math.pow(B,2)
var re = A*B

console.log("TRIANGULO: "+at.toFixed(3))
console.log("CIRCULO: "+circulo.toFixed(3))
console.log("TRAPEZIO: "+tr.toFixed(3))
console.log("QUADRADO: "+q.toFixed(3))
console.log("RETANGULO: "+re.toFixed(3))
