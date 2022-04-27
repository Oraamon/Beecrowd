var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var x = parseFloat(prompt("x"));
if(x > 100 || x < 0) {
    console.log("Fora de intervalo");
}

else if( x >= 0 && 25 >= x){
console.log("Intervalo [0,25]");    
}

else if( x > 25 && 50 >= x){
console.log("Intervalo (25,50]");
}

else if( x > 50 && 75 >= x){
console.log("Intervalo (50,75]");
}

else if( x > 75 && 100 >= x){
console.log("Intervalo (75,100]");
}
