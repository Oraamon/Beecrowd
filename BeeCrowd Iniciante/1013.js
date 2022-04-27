var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n');

var [a,b,c] = lines.shift().split(" ").map(Number)

var maiorAB = (a + b + Math.abs(a - b)) /2

var maiorFinal = ( maiorAB + c + Math.abs(maiorAB - c)) /2 

console.log(maiorFinal + " eh o maior")
