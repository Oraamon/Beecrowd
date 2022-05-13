var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 0
var j = 1
while(i<=2){
    console.log("I="+i+" J="+j)
    console.log("I="+i+" J="+(j+1))
    console.log("I="+i+" J="+(j+2))
    i = ((i*10 )+2)/10
    j =((j*10)+2)/10
}
