var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var y = parseInt(lines.shift());



for(x = 1; x <= y ; x++){
  if(x%2 == 0)
    console.log(x+"^2 = "+ Math.pow(x,2))
}
