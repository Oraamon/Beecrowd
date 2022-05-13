var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var x = 0

    while (x < 1) {
        var y = lines.shift().split(" ").map(Number)

        if (y == 2002) {
            console.log("Acesso Permitido")
            break;
        }
        else {
            console.log("Senha Invalida")
        }

    }
