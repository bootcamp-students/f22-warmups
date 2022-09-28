var makeEveryLetterAfterXCaps = function (str, letter) {

  
  let newString = 1 + (str.indexOf(letter));
  console.log(newString);
  newString = str.charAt(newString);
  console.log(newString)
  let insertString = newString.toUpperCase(newString);
  console.log(insertString)
  
  let x = str.charAt(newString)
  console.log("testing ",x)
  let y = str.split(newString).join(insertString);
  
  console.log(y)
  
  
  return y
  
  
}
//.join(letter.toUpperCase(letter));
// str var indexOf(letter)
// returns a int + 1
// set indexDo var to = str.charAt(int + 1)
//  cap string

// const new string = str.split(str).join(indexDo)
