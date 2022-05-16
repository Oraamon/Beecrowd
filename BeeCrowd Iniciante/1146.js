var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    var qnt = lines.length
    
    x = 1
    while(x<=qnt){
        let c =1
        var num = []
    var a = parseInt(lines.shift())    
    if(a==0){
        break;
    }
        while(c<=a){
        num.push(c) 
        c++
        
        }
        x++
        console.log(num.join(" "))
    }
