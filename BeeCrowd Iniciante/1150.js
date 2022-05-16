var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var a = parseInt(lines.shift())
var n = parseInt(lines.shift())
const b = a

if(n <= a){
    while(n <= a){
        n = parseInt(lines.shift())
        
    }
}
var t=1 
for(i = 1;i<=999;i++){
    if(a<=n){
       a = a + b + i
       t++
    }
    else{
    break   
    }
}

console.log(t)
