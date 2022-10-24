function duplicateCount(text){
  // Makes everything lower case and splits into an array
  text = text.toLowerCase().split('').sort();
  let count = 0;
  let uniqueCount = 0;
  // For checking if the character has been counted already.
  let uniqueChar = '';
  // Loop through the array and check for the duplicates
  for(let i = 0; i < text.length; i++){
    // If the character is a duplicate and Not in the unique String
    if(text[i] === text[i + 1] && !uniqueChar.includes(text[i])){
      uniqueChar += text[i]
      count++;
    }
    // If the character is unique
    if(count >= 1){
      uniqueCount++;
    }
    count = 0;
  }
  return uniqueCount;
}
