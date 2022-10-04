// Test Cases
// All with different output (commas and 'ands')
// If names > 4
// If names === 3
// If names === 2
// If names === 1
// Else 'no one'

function likes(names) {
  // TODO
  
  console.log("Array in: ", names);
  console.log("Array length: ", names.length);
  
  if (names.length >= 4) {
    console.log("Inside the 1st if");
    console.log(`${names[0]}, ${names[1]} and ${names.length-2} others like this`);
    return(`${names[0]}, ${names[1]} and ${names.length-2} others like this`);
  } else if 
    (names.length === 3) {
      console.log("Inside the 2nd if");
    console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
    return(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  } else if
    (names.length === 2) {
      console.log("Inside the 3rd if");
      console.log(`${names[0]} and ${names[1]} like this`);
      return(`${names[0]} and ${names[1]} like this`);
    } else if
    (names.length === 1) {
      console.log("Inside the 4th if");
    console.log(`${names[0]} likes this`);
    return(`${names[0]} likes this`);
  } else {
    console.log("Inside the else");
    console.log('no one likes this');
    return('no one likes this');
  };
  
}
