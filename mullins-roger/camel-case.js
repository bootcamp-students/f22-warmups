function toCamelCase(str){
  console.log("String in: ", str);
  let workingArray = str;
  workingArray = workingArray.split(/[-_]/);
  console.log("Split string: ", workingArray);
  let returnString = workingArray[0];
  //console.log(workingArray);
  console.log("First word: ", returnString);
  console.log(workingArray.length);
  for (let i=1; i<workingArray.length; i++) {
    if (workingArray.length > 0) {
      console.log(workingArray[i]);
      console.log(workingArray[i][0].toUpperCase());
      workingArray[i] = workingArray[i].replace(workingArray[i][0], workingArray[i][0].toUpperCase());
      returnString = returnString.concat(workingArray[i]);
    }
  }
  return returnString;
}
