var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


    var unidades = parseInt(lines.shift())
    var y = []
    while (y.length <= unidades) {
        y.push(parseInt(lines.shift()))
    }


    var x = 0

    while (x <= y.length) {

        if (y[x] % 2 != 0 && Math.sign(y[x]) == -1) {
            console.log("ODD NEGATIVE")
        }
        else if (y[x] % 2 != 0 && Math.sign(y[x]) == 1) {
            console.log("ODD POSITIVE")
        }
        else if (y[x] % 2 == 0 && Math.sign(y[x]) == -1) {
            console.log("EVEN NEGATIVE")
        }
        else if (y[x] % 2 == 0 && Math.sign(y[x]) == 1) {
            console.log("EVEN POSITIVE")
        }
        if (y[x] == 0) {
            console.log("NULL")
        }
        x++
    }
