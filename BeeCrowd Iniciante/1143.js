var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var s= 1
var b= 1
var c= 1
for(a=1;a<=x;a++){
    console.log(s,b,c)
    s++
    b= ((a+1)*(a+1))
    c= (Math.pow(a+1,3))
}
