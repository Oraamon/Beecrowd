var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

 var i;
    var numero = parseInt(lines.shift())
    for (i = 1; i <= numero; i = i + 1) {

        var [nota1, nota2, nota3] = lines.shift().split(" ").map(Number)
        var result = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
        console.log(result.toPrecision(2))
    }
