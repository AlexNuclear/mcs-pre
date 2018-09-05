
var splitedWord = [];

var splitWord = function (word) {
  var word = 'Слово';
  var wordArr = word.split('');
  wordArr.reverse();
  var finalWord = wordArr.join('');
  console.log(finalWord);
}

splitWord();
