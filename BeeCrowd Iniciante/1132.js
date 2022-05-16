var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())
var soma = 0
if(a>b){
while(b<=a){
    if(b%13!=0){
        soma = soma + b
    }
    b++
}
}
else if(a<b){
   while(a<=b){
    if(a%13!=0){
        soma = soma + a
    }
    a++
   }
}
console.log(soma)
