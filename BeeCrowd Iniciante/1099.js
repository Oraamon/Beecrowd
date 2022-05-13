var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var d = parseInt(lines.shift())
    for (x = 1; x <= d; x++) {
        let [a, b] = lines.shift().split(" ").map(Number)

        let soma = 0

        if (a < b) {
            a++
            while (a < b) {
                if (a % 2 != 0) {
                    soma = soma + a
                }
                a++
            }
        }
        if (b < a) {
            b++
            while (a > b) {
                if (b % 2 != 0) {
                    soma = soma + b
                }
                b++

            }
        }



        console.log(soma)

    }
