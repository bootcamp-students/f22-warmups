// LOOP through creating an array
// GET absolute value of a and b
// CALCULATE distance between
// -2 . -1 . 0 . 1 . 2
// INITIALIZE array with a as first element
// INCREMENT a
// LOOP through based on distance
//  BEGIN
//  INSERT current value of a
//  INCREMENT a
//  END
// RETURN array


function between(a, b) {
  // your code here

  let distance = (b-a-1);
  
//   if (a<0 && b<0) {
//     distance = (Math.abs(a) + Math.abs(b));
//   };
  
//   if (a<0 && b > 0) {
//     distance = (Math.abs(a) + b)
//   };
  
//   if (a>0 && b>0) {
//     distance = a+b-1;
//   };
  
  let result = [];
  result[0]=a;
  a++;
  for (let i=1; i<=distance+1; i++) {
    result[i]=a;
    console.log(a + " inserted into array.");
    a++;
    console.log("a is now " + a);
  }
  console.log("Outside loop.")
  return result;
}
