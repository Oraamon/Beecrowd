var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var x = parseInt(lines.shift())
var y = parseInt(lines.shift())
var valores = 0
if ( x < y){
    x = x + 1
    while(x < y){
         if(x%2 != 0){
        valores = valores + x
    }
    x++
    }
    
}
else {
    y = y + 1
    while(y < x){
         if(y%2 != 0){
        valores = valores + y
    }
    y++
    }
}

console.log(valores)
