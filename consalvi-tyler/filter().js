/*
set each grade = to a filter for appropriate values
return length of each filter
*/

function countGrade(scores){
  
  let S = scores.filter(x => x == 100).length
  let A = scores.filter(x => x < 100 && x >= 90).length
  let B = scores.filter(x => x < 90 && x >= 80).length
  let C = scores.filter(x => x < 80 && x >= 60).length
  let D = scores.filter(x => x < 60 && x >= 0).length
  let X = scores.filter(x => x < 0).length
  
  return {S, A, B, C, D, X}
}
