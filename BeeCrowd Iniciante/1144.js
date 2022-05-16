var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var z = parseInt(lines.shift())
var [a,b,c] = []
for(x=1;x<=z;x++){
    b= x*x
    a =x
    c = x*x*x
    console.log(a,b,c)
    
    console.log(a,b+1,c+1)
      
}
