var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var partida;
var inter = 0
var gremio = 0
var empate = 0
var grenais = 0 
while(1 < 2){
    partida = lines.shift().split(" ").map(Number)
    if(partida[0]>partida[1]){
        inter++
    }
    else if(partida[0]<partida[1]){
        gremio++
    }
    else if(partida[0]==partida[1]){
        empate++
    }
    grenais++
    console.log("Novo grenal (1-sim 2-nao)")
    let b = parseInt(lines.shift())
    if(b == 1){

    }
    else if(b == 2){
        break
    }
}
console.log(grenais+" grenais")
console.log("Inter:"+inter)
console.log("Gremio:"+gremio)
console.log("Empates:"+empate)
if(inter > gremio){
    console.log("Inter venceu mais")
}
if(inter < gremio){
    console.log("Gremio venceu mais")
}

if(inter == gremio){
    console.log("Nao houve vencedor")
}
