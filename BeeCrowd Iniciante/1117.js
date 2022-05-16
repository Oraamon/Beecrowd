var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nota = 0
 var valido = 0
 var tentativa = 1
 while (1<2){
        let x = parseFloat(lines.shift())
        
        if(valido == 2){
            console.log("media = " + (nota/2))
            break;
        }
        else if (0 <= x && x <= 10) {
            nota = nota + x
            valido++
        }
        else {
            console.log("nota invalida")
        }
 }
