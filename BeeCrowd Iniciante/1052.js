var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var MES = parseInt(lines.shift());
switch (MES){
    case 1:
        MES = "January";
        break;
    case 2:
        MES = "February";
         break;
    case 3:
        MES = "March";
         break;
    case 4:
        MES = "April";
         break;
    case 5:
        MES = "May";
         break;
    case 6:
        MES = "June";
         break;
    case 7:
        MES = "July";
         break;
    case 8:
        MES = "August";
         break;
    case 9:
        MES = "September";
         break;
         case 10:
        MES = "October";
         break;
         case 11:
        MES = "November";
         break;
         case 12:
        MES = "December";
         break;
        default:
      MES = "BAH";
}
console.log(MES);
