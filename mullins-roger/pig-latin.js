function pigIt(str){
  //Code here
  
  let returnString = "";
  
  let latinArray = str.split(" ");
  console.log(latinArray);''
  
  latinArray.forEach(word => {
    if (word.includes("?") || word.includes("!")) {
//       word = word;
      returnString = returnString + word + " ";
    } else {
      let hold = word.slice(0,1);
      word = word.slice(1);
      word = word + hold + "ay";
      console.log(word);
      returnString = returnString + word + " ";
    };
  })
  returnString = returnString.slice(0, returnString.length-1);
  //returnString = returnString + "'";
  console.log(returnString);
  return returnString;
}
