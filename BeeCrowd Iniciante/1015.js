var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [xo,yo] = lines.shift().split(" ").map(Number)
var [x,y] = lines.shift().split(" ").map(Number)
var distancia = Math.pow((Math.pow(x-xo,2)+Math.pow(y-yo,2)),1/2)
console.log(distancia.toFixed(4))
