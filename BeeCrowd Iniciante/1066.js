var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var y = []
for(x = 1; x<=5;x++){
    y.push(lines.shift())
}

var valores = 0
var valoresi = 0
var valoresp = 0
var valoresn = 0
for(z = 0; z <5; z++){
    if(y[z]%2 == 0){
        valores++
    }
     if(y[z]%2 != 0){
        valoresi++
    }
     if(Math.sign(y[z]) == 1){
        valoresp++
    }
     if(Math.sign(y[z]) == -1){
        valoresn++
    }
    
    if(z == 4){
          console.log(valores + " valor(es) par(es)")
           console.log(valoresi + " valor(es) impar(es)")
            console.log(valoresp + " valor(es) positivo(s)")
             console.log(valoresn + " valor(es) negativo(s)")
    }
    
}
