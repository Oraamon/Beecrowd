var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

 var x = parseInt(lines.shift())
for(y =1 ; y <= x ; y++){
    if(y%2 != 0){
        console.log(y)
    }
}
