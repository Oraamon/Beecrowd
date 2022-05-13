var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var j = 65
var i = -2
while(j>0){
    i = i + 3
    j = j - 5
    console.log("I=" +i+ " J="+j)
}
