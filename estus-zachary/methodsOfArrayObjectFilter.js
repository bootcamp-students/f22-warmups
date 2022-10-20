// Filter the scores of each range.
// Get the length of that array, meaining the number of 

function countGrade(scores){
  return {
    'S': scores.filter(x => x===100).length,
    'A': scores.filter(x=> 100>x  && x>=90).length,
    'B': scores.filter(x => 90>x && x>=80).length,
    'C': scores.filter(x => 80>x && x>=60).length,
    'D': scores.filter(x => 60>x && x>=0).length,
    'X': scores.filter(x => x==-1).length,
  }
}
//   let countS = scores.filter(x => x===100).length;
//   let countA = scores.filter(x=> 100>x  && x>=90).length;
//   let countB = scores.filter(x => 90>x && x>=80).length;
//   let countC = scores.filter(x => 80>x && x>=60).length;
//   let countD = scores.filter(x => 60>x && x>=0).length;
//   let countX = scores.filter(x => x==-1).length;
//   return {S:countS, A:countA, B:countB, C:countC, D:countD, X:countX}
  
