function order(words){
  // given a string containing s single number
  //sort the string by the number given within the words
  //split the string into an array
  //for each index of the array find the number within the index
  //if array includes 0 thru array.length then push to a new array
  //sort the array by the number
  //convert the array back to string
  let newArray = [];
  words = words.split(' ');
  console.log(words);
  for (let i = 1; i <= words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      console.log(words[j].length + " length " + words[j]);
      //console.log(words[i][j]);
      if(words[j].includes(i)) {
         newArray.push(words[j]);
         }
     }
  }
  console.log(newArray)
  return newArray.join(' ');
};
