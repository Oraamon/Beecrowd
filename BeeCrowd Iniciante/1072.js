var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var x = parseInt(lines.shift())
var a;
 var iin = 0
var out = 0
for(y=1;y<=x;y++){
   
    a = parseInt(lines.shift())
    if(a <= 20 && 10 <= a ){
        iin++
    }
    else{
        out++
    }
}
console.log(iin + " in")
console.log(out + " out")
