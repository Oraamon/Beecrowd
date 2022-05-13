var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var i = 1
while(i<=9){
    console.log("I="+i+" J=7")
    console.log("I="+i+" J=6")
    console.log("I="+i+" J=5")
    i = i +2
}
