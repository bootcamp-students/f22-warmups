/*

*/


function countGrade(scores){
  //coding here...
//   console.log(scores)
  
  let S = scores.filter(x => x == 100).length
  
  let A = scores.filter(x => x < 100 && x >= 90).length
  
  let B = scores.filter(x => x < 90 && x >= 80).length
  
  let C = scores.filter(x => x < 80 && x >= 60).length
  
  let D = scores.filter(x => x < 60 && x >= 0).length
  
  let X = scores.filter(x => x < 0).length
  console.log(S)
  console.log(A)
  console.log(B)
  console.log(C)
  console.log(D)
  return {S, A, B, C, D, X}
}
