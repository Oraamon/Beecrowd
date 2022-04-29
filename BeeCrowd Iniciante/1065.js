var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var y = []
for(x = 1; x<=5;x++){
    y.push(lines.shift())
}

var valores = 0
for(z = 0; z <5; z++){
    if(y[z]%2 == 0){
        valores++
    }
    
    if(z == 4){
        console.log(valores + " valores pares")
    }
    
}
