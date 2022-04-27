var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines.shift())
function notas(x) {
    var nota = parseInt(valor / x);

    valor = (valor - nota * x).toFixed(2);

    return nota;
  }

  console.log("NOTAS:");
  console.log(notas(100) + " nota(s) de R$ 100.00");
  console.log(notas(50) + " nota(s) de R$ 50.00");
  console.log(notas(20) + " nota(s) de R$ 20.00");
  console.log(notas(10) + " nota(s) de R$ 10.00");
  console.log(notas(5) + " nota(s) de R$ 5.00");
  console.log(notas(2) + " nota(s) de R$ 2.00");

  console.log("MOEDAS:");
  console.log(notas(1) + " moeda(s) de R$ 1.00");
  console.log(notas(0.5) + " moeda(s) de R$ 0.50");
  console.log(notas(0.25) + " moeda(s) de R$ 0.25");
  console.log(notas(0.1) + " moeda(s) de R$ 0.10");
  console.log(notas(0.05) + " moeda(s) de R$ 0.05");
  console.log(notas(0.01) + " moeda(s) de R$ 0.01");
