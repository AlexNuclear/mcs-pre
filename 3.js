var year = prompt("В каком году?");
year = parseInt(year);
debugger;
var identifyIfLeap = function (year) {
  if ( year % 4 == 0) {
  alert('This is a leap year')
} else {
    alert('This is not a leap year')
  }
}

identifyIfLeap();
