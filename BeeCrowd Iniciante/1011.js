var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var prompt = function(texto){return lines.shift();};


var x = parseInt(prompt("x"));

var pi =  3.14159;

var volume  =( parseFloat(4/3) * pi * (x * x * x));


console.log("VOLUME = " + volume.toFixed(3))
