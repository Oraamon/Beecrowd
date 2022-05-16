var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var al = 0
var g = 0
var d = 0
while(1<2){
    let a = parseInt(lines.shift())
    
    if(a == 1){
        al++
    }
    if(a == 2){
        g++
    }
    if(a == 3){
        d++
    }
    if(a == 4){
        break;
    }
}

console.log("MUITO OBRIGADO")
console.log("Alcool: "+al)
console.log("Gasolina: "+g)
console.log("Diesel: "+d)
