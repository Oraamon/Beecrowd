var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var y = lines.shift().split(" ").map(Number)
var a =y[0]
var n = y[1]
const b = a
var c = 1
if(n <= 0){
    while(n <= 0){
        n = y[c]
        c++
    }
}

for(i = 1;i<=999;i++){
    if(0<=i &&  i<= n-1){
       a = a + b + i
    }
    else{
    break   
    }
}

console.log(a)
