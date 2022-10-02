// the solution below works here but not in codwars
// given string
//string includes a letter (x)
//convert the letter after x to upper case
var makeEveryLetterAfterXCaps = function (str, letter) {
    //turn str into an array
    char = str.split('');
    //loop through array
    for (let i = 0; i < char.length; i++) {
    // if array index i equals letter
      if (char[i] === letter) {
    //then array index i + 1 convert to upper case
        char[i + 1] = char[i + 1].toUpperCase();
        console.log(char[i]);
      }
    // convert arry back to string
    // return value
    } return char.join('');
  };
  console.log(makeEveryLetterAfterXCaps('bac', 'a'));

  //updates solution to work on codewars

  var makeEveryLetterAfterXCaps = function (str, letter) {
    char = str.split('');
    for (let i = 1; i < char.length; i++) { //I fumbled a lot with the initialize and if statement index below
      if (char[i - 1] === letter) {
        char[i] = char[i].toUpperCase();
        console.log(char[i]);
      }
    } return char.join('');
  };
