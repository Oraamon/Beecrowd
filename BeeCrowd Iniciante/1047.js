var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var [hora1,minuto1,hora2,minuto2] = lines.shift().split(" ").map(Number);
var hm1 = hora1 * 60
var hm2 = hora2 *60
var totalminutosi = hm1 + minuto1
var totalminutosf= hm2 + minuto2
var resto = ("a")
if(totalminutosf > totalminutosi){
    resto = totalminutosf - totalminutosi
}
else if(totalminutosf == totalminutosi){
    resto = 24*60
}
else if(totalminutosi > totalminutosf)
resto = totalminutosf - totalminutosi + (24 * 60)

var horas = parseInt(resto/60)
resto = resto%60
var minutos = resto

console.log("O JOGO DUROU "+ horas +" HORA(S) E "+ minutos +" MINUTO(S)")
