var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a,b] = lines.shift().split(" ").map(Number)

if ( a > b){
    console.log("O JOGO DUROU " + ((24 -a)+ b) +" HORA(S)")
}
if ( a == b){
    console.log("O JOGO DUROU " + 24 +" HORA(S)")
}
if ( a < b){
    console.log("O JOGO DUROU " + (b - a) +" HORA(S)")
}

