function toCamelCase(str){
  //split string into array by characters - and _
  //loop through the array starting at index 1
  //split off index 0 of each word in the string and capitalize that letter
  //combine this letter with the original word
  //and update the first letter of every index other than the first index
  //convert back to string and join the result by
  str = str.includes('-') ? str.split('-') : str.split('_');
  console.log(str);
  let newArray = [];
  for (let i = 1; i < str.length; i++) {
    let word = str[i];
    let upperCase = str[i].slice(0,1).toUpperCase();
    let newWord = word.replace(word[0], upperCase);
    newArray.push(newWord);
    //console.log(newWord);
    //let upperCaseLetter = str[i][0].toUpperCase();
    //console.log(upperCaseLetter);
  }
    return str[0] + newArray.join('');
}
