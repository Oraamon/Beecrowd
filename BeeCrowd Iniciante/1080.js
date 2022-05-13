var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var a = parseInt(lines.shift(""));
var maior = a
var posicao = 1
for(y=1;y <= 100 ; y++) {
    if(maior < a) {
        var maior = a
        var posicao = y
    }
    var a = parseInt(lines.shift(""));
}
if(a > maior) {
    var maior = a
    posicao++
}
console.log(maior)
console.log(posicao)
