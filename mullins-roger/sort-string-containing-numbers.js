function order(words){
  // ...
  let sortingArray = words.split(" ");
  let sortedArray = [];
  let returnedString = "";
  console.log(sortingArray);
  for (let i = 0; i<sortingArray.length; i++) {
    let includesTest = (i+1).toString();
    console.log("String being tested is: ", sortingArray[i]);
    console.log("Testing for: ", includesTest);
    for (let j = 0; j<sortingArray.length; j++) {
      //console.log("Second for loop. Testing: ", )
      if (sortingArray[j].includes(includesTest)) {
        sortedArray.push(sortingArray[j]);
      }
    }
  }
  console.log(sortedArray);
  returnedString = sortedArray.join(" ");
  return(returnedString);
}
