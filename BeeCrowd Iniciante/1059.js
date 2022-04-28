var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(x=2;x<=100;x += 2){
  console.log(x) ; 
}
