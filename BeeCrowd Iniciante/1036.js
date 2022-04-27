var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var [A,B,C] = prompt("a").split(" ").map(Number);

 var bascara = Math.sqrt((B * B - 4 * A * C ));
 var r1 = ((-B + bascara)/(A*2));
 var r2 = ((-B - bascara)/(A*2));
 
 if ((A == 0) || (B * B - 4 * A * C < 0)){
     console.log("Impossivel calcular")
     
 }
 else{
     
     console.log("R1 = " + r1.toFixed(5))
     console.log("R2 = " + r2.toFixed(5))
     
 }
