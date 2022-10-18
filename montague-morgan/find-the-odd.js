function findOdd(A) {
  // create an array for the initial array, or you can just use A
  // set a new variable for A's length
  // nuke and code
  let length = A.length
  let test
  let Keith = A.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < length; i++) {
  console.log(A[i])
       if (A[i] === test) {
         count++;
         continue;
      };
      if(count % 2){
         return test;
      };
      test = A[i];
      count = 1;
    }
  return test
  }

// function findOdd(A) {
//   let num = A.length
//   for(let i = 0; i < num; i++){
//     let count = 0;
    
//     for(let j = 0; j < num; j++){
//       if(A[i] == A[j]){
//         count++
//       }
//     }
//     if(count%2 !== 0){
//       return A[i]
//     }
//   }
// }
//   let length = A.length
//   console.log(length)
//   console.log(A)
//   let newA = A.sort()
//   console.log(newA)
//   A.forEach((length) => {
//      if(A%2 !== 0){
//       return A}
