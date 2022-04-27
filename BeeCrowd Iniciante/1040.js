var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var [n1,n2,n3,n4] = prompt("x").split(" ").map(Number);
var exame = parseFloat(prompt("y"));
n1 = n1 * 2
n2 = n2 * 3
n3 = n3 * 4
n4 = n4 * 1

var media = parseFloat((n1 + n2 +n3 +n4)/10);

if (media >= 7){
    console.log("Media: " + media.toFixed(1));
    console.log("Aluno aprovado.");
}
else if( media < 5){
     console.log("Media: " + media.toFixed(1));
     console.log("Aluno reprovado.");
}
else if( media >= 5 && media < 7){
    console.log("Media: " + media.toFixed(1));
    console.log("Aluno em exame.");
    
    if (exame >= 5){
        console.log("Nota do exame: " + exame.toFixed(1));
        console.log("Aluno aprovado.");
        console.log("Media final: " + ((exame + media)/2).toFixed(1));
    }
    else if (exame > 0){
         console.log("Nota do exame: " + exame.toFixed(1));
        console.log("Aluno reprovado.");
        console.log("Media final :" + ((exame + media)/2).toFixed(1));
    }
}
