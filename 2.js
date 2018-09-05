var you = 'Dobbi'
var forYou = you || 'you';

function makeSentense (you) {
  return 'one for ' + forYou + ',' +'one for me'
}

console.log(makeSentense());
