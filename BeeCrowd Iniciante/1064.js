var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var num = 0



var unidades = lines.length
var y = [] 
while(y.length < unidades){
y.push(parseFloat(lines.shift()))
}


var x = 0
var pos = 0
while(x <= y.length ){

if(Math.sign(y[x]) == 1){
    pos++
    
    num = num + y[x]
}
x++
}
console.log(pos+" valores positivos")
var media = (num/pos) 
console.log(media.toFixed(1))
