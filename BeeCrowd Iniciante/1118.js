var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var y = 0
    var nota = 0
    var valido = 0
    var tentativa = 1
    var a = 0
    var x;
    while (1 < 2) {
        if (valido == 2) {
            console.log("media = " + (nota / 2).toFixed(2))

            while (1 < 2) {
                y = parseInt(lines.shift())
                
                console.log("novo calculo (1-sim 2-nao)")
                if (y == 1) {
                    valido = 0
                    break;
                }
                else if (y == 2) {
                    break;
                }
            }
            if (y == 1) {
                valido = 0
                nota = 0
            }
            else if (y == 2) {
                break;
            }
        }
        x = parseFloat(lines.shift())

        if (0 <= x && x <= 10.00) {
            nota = nota + x
            valido++
        }
        else {
            console.log("nota invalida")
        }
    }
      
