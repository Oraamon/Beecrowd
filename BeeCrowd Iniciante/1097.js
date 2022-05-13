var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 1
var j = 7
while(i<=9){
    console.log("I="+i+" J="+j)
    console.log("I="+i+" J="+(j-1))
    console.log("I="+i+" J="+(j-2))
    i = i +2
    j = j + 2
}
