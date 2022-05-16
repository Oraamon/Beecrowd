var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quantidade = parseInt(lines.shift())

for(x=1;x<=quantidade;x++){
        let [x, y] = lines.shift().split(" ").map(Number)
        let div = x/y
        if (div == "-Infinity" || div == "Infinity") {
            console.log("divisao impossivel")
        }
        else {
            console.log(div.toFixed(1))
        }
        
    }
