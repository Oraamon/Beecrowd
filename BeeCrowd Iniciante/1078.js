var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift())
for(x = 1; x <= 10; x++){
console.log(x + " x " + n + " = " + (x * n))
}
