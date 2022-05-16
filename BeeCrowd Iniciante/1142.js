var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var d = 1
var numero = 1
while(d<=x){
console.log(numero+" "+(numero+1)+" "+(numero+2)+" PUM")
d++
numero = numero + 4
}
