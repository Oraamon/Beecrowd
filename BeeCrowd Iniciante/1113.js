var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 var x = 1
    var y = 2
    while (x != y) {
        var [x, y] = lines.shift().split(" ").map(Number)
        if (x < y) {
            console.log("Crescente")
        }
        else if (x > y) {
            console.log("Decrescente")
        }
        else if (x == y) {
            break;
        }
        
    }
