var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var a;
var calculo = 0
var C = 0
var R = 0
var S = 0
for(y = 1; y<=x;y++){
    a = lines.shift().split(" ")
    a[0] = parseInt(a[0])
    calculo = calculo + a[0]
    
    if(a[1] == "C"){
        C = C + a[0]
    }
    else if(a[1] == "R"){
        R= R + a[0]
    }
    else if(a[1] == "S"){
        S= S + a[0]
    }
    
}
function porcentagem(total,numero){
    let porcentage = ((numero/total)*100)
    return porcentage
}
console.log("Total: "+calculo+" cobaias")
console.log("Total de coelhos: "+C)
console.log("Total de ratos: "+R)
console.log("Total de sapos: "+S)
console.log("Percentual de coelhos: "+porcentagem(calculo,C).toFixed(2)+" %")
console.log("Percentual de ratos: "+porcentagem(calculo,R).toFixed(2)+" %")
console.log("Percentual de sapos: "+porcentagem(calculo,S).toFixed(2)+" %")
