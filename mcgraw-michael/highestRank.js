function highestRank(arr){
  let keyCount = 0;
  let highKeyCount = 0;
  let highestFrequent;
  
  
 const obj = arr.reduce((accumulator, value) => {
  return {...accumulator, [value]: 0};
}, {});
  
  for ( let property in obj) {
    for (let i = 0; i < arr.length; i++ ) {
      if (property == arr[i]) {
        obj[property]++
      }
    
   } 
    console.log(`${property}: ${obj[property]}`)
    console.log(typeof (property))
    
  } 
  for ( let key in obj ) {
    keyCount = obj[key]
    if (keyCount >= highKeyCount) {
      highKeyCount = keyCount
    highestFrequent = key;
    console.log(keyCount)
  }}
    console.log(keyCount);
  console.log(highestFrequent)
  return parseInt(highestFrequent)
}
