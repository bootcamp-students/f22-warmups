// Loop through each array and check for duplicates using 

function longest(s1, s2) {
  let newStr = [];
  // Checks for duplicates and pushes it to the new array 
  s1.split('').forEach( (item) => {
      if(!newStr.includes(item)){
        newStr.push(item)
      }
 });
  // Loop through s2 and pushes unique values to the newStr.
  s2.split('').forEach( (item) => {
      if(!newStr.includes(item)){
        newStr.push(item)
      }
 });
  return newStr.sort().join('');
}
