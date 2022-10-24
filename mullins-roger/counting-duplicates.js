function duplicateCount(text){
  //...
  
  function countChars(test) {
    let count = 0;
    for (let i=0; i<text.length; i++) {
      if (test == examineArray[i]) {
        count = count+1;
      }
    }
    console.log (count, " instances of ", test);
    return count;
  }
  
  // This is from stackoverflow :-( 
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  let upperArray = text.toUpperCase();
  let examineArray = upperArray.split("");
  let countArray = [];
  let charCount = 0;
  console.log(examineArray);
  
  for (let i=0; i<text.length; i++) {
    charCount = countChars(examineArray[i]);
    //console.log(charCount, examineArray[i]);
    if (charCount > 1) {
      countArray.push(examineArray[i]);
    }
  }
  console.log(countArray);
  
