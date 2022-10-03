function findShort(s){
  
  let strSplit = s.split(' ');
  let shortestWord = s.length;
  console.log(strSplit)
  console.log(shortestWord)
  for(let i = 0; i < strSplit.length; i++){
    console.log('testing',strSplit.length)
    console.log(strSplit[i].length)
    if(strSplit[i].length < shortestWord){
      shortestWord = strSplit[i].length;
    }
  }
  console.log('answer ',shortestWord)
  return shortestWord
}
// func Param (s)
// var splitString set to split func Param (s)
// split creates an array splitting each char ' ' into a string in an array
// var shortWord set to func Param (s) [length] of string

//for loop (var i = 0, if i is greater then array length)
//
