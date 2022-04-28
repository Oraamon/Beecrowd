var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var unidades = lines.length
var y = [] 
while(y.length < unidades){
y.push(parseFloat(lines.shift()))
}

var x = 1
var pos = 0
while(x <= y.length ){

if(y[x]%2){
    pos++
}
x++
}
console.log(pos+" valores positivos")
