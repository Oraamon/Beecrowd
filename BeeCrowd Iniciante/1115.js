var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


 while (1 != 2) {
        let [x, y] = lines.shift().split(" ").map(Number)
        if (x > 0 && y > 0) {
            console.log("primeiro")
        }
        else if (x < 0 && y >0) {
            console.log("segundo")
        }
        else if (x < 0 && y < 0) {
           console.log("terceiro")
        }
        else if (x > 0 && y <0) {
            console.log("quarto")
        }
        else if (x ==  0 || y == 0) {
            break;
        }
        
    }
