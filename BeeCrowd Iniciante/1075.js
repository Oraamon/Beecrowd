var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

 var n = parseInt(lines.shift())
 for(x=1;x<=10000;x++){
     
     if( x%n == 2){
         console.log(x)
     }
     
 }
