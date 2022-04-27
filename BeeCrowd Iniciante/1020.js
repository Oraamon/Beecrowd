var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto){return lines.shift();};

var dias = parseInt(prompt("x"));

function datas(x){
    var valor = parseInt(dias/ x );
    
    dias = dias - (valor * x);
    
    return valor
    }
    
    

      console.log(datas(365) + " ano(s)");
        console.log(datas(30) + " mes(es)");
          console.log(datas(1) + " dia(s)");
