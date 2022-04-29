var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var y = parseInt(lines.shift())
var z = 1
while(z <= 6) {
  
    if (y%2 != 0){
        console.log(y)
        z++
    }
    y++
}
