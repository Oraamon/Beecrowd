var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
    var y = parseInt(lines.shift())
    var z;
    var maior;
    if (x < y) {
        var z = x + 1
        maior = y
    }
    else {
        var z = y + 1
        maior = x
    }


    var resto;
    while (z < maior) {

        resto = (z % 5);

        if (resto == 2 || resto == 3) {
            console.log(z)
        }
        z++
    }
