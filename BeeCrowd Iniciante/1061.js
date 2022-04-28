var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    var dias = lines
        .shift()
        .split(" ")
        .map(Number);
    var [hora, minuto, segundo] = lines
        .shift()
        .split(" : ")
        .map(Number);
    var dias2 = lines
        .shift()
        .split(" ")
        .map(Number);
    var [hora2, minuto2, segundo2] = lines
        .shift()
        .split(" : ")
        .map(Number);
    dias = dias[1];
    dias2 = dias2[1];

    var t1 = dias * 86400 + hora * 60 * 60 + minuto * 60 + segundo;
    var t2 = dias2 * 86400 + hora2 * 60 * 60 + minuto2 * 60 + segundo2;
    var dif = t2 - t1
    function notas(x) {
        var nota = parseInt(dif / x);

        dif = dif % x

        return nota;
    }
  
    console.log(notas(86400) + " dia(s)")
    console.log(notas(60 * 60) + " hora(s)")
    console.log(notas(60) + " minuto(s)")
    console.log(notas(1) + " segundo(s)")
