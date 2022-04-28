var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var DDD = parseInt(lines.shift());
switch (DDD){
    case 61:
        DDD = "Brasilia";
        break;
    case 71:
        DDD = "Salvador";
         break;
    case 11:
        DDD = "Sao Paulo";
         break;
    case 21:
        DDD = "Rio de Janeiro";
         break;
    case 32:
        DDD = "Juiz de Fora";
         break;
    case 19:
        DDD = "Campinas";
         break;
    case 27:
        DDD = "Vitoria";
         break;
    case 31:
        DDD = "Belo Horizonte";
         break;
        default:
      DDD = "DDD nao cadastrado";
}
console.log(DDD);
