var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

  while (1 < 2) {
        let [a, b] = lines.shift().split(" ").map(Number)
        
        var soma = 0
        let num = []
        if (b == 0 || 0 > b) {
            break
            
        }
        if (a == 0 || 0 > a) {
            break
            
        }
        if (a < b) {

            while (a <= b) {

                soma = soma + a
                num.push(a)
                a++
            }
        }
        else if (b < a) {

            while (a >= b) {

                soma = soma + b
                num.push(b)
                b++}

        }
        num = num.join(" ")
        console.log(num,"Sum="+soma)
    }  
