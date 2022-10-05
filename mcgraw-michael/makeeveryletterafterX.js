function makeEveryLetterAfterXCaps(str, letter) {
  let  newStr = str;
  let upLetter;
  let newStr1;
  let newStr2;
  let newStrX;

  for (i = 0; i < str.length; i++){
    if (str[i] === letter) {
      if(i === (str.length - 1)){
        return newStr;
      }
    
    newStrX = newStr.substring(0, i+2);
    console.log(`newStrX = ${newStrX}`)
    
    newStr2 = newStr.substring(i+2);
    console.log(`newStr2 = ${newStr2}`);

    let check = newStrX[i+1];

    console.log(`letter to change is ${check}`);
      
    if (newStrX[i] === newStrX[i].toUpperCase())  {
      console.log(`if statement = ${newStrX[i]}`);
    }
    upLetter = newStrX.slice(i+1).toUpperCase();
    console.log(`upLetter = ${upLetter}`);
    console.log(`${newStrX[i]}`)
      
    if (upLetter === newStr[i]){
      console.log(newStr[i]);
      upLetter = upLetter.toLowerCase();
    } 
      // lowercaseLet = newStrX[i].toLowerCase();
     
      // newStrX = newStrX.slice(0,i) + lowercaseLet;
      
    

    newStr1 = newStrX.slice(0, i+1);

    newStr = newStr1 + upLetter + newStr2;

    } console.log(`${newStr1}${upLetter}${newStr2}`)
  } return newStr;
}
