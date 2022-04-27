var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sl = lines.shift().split(" ").map(Number);
var mutiplicador = (1);

if (0 <sl && sl <= 400.00){
    mutiplicador = 1.15;
}
else if (400.01 <= sl && sl <=800.00){
    mutiplicador = 1.12;
}
else if (800.01<=sl && sl <=1200.00){
    mutiplicador = 1.10;
}
else if (1200.01<=sl && sl <=2000.00){
    mutiplicador = 1.07;
}

else if (2000.00 < sl){
    mutiplicador = 1.04;
}

console.log("Novo salario: " + (sl * mutiplicador).toFixed(2));
console.log("Reajuste ganho: " +((sl * mutiplicador)-sl).toFixed(2));
console.log("Em percentual: " + ((100* mutiplicador)-100).toFixed(0) + " %");
