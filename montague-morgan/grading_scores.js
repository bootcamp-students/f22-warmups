function countGrade(scores){
let gradeObj ={
  S:scores.filter(score => score == 100).length,
  A:scores.filter(score => score <= 99 && score >= 90).length,
  B:scores.filter(score => score <= 89 && score >= 80).length,
  C:scores.filter(score => score <= 79 && score >= 60 ).length,
  D:scores.filter(score => score <= 59 && score >= 0).length,
  X:scores.filter(score => score < 0).length,
}
//   (scores=100)? gradeObj.S + 1
console.log(gradeObj)
  return gradeObj
} 



// Hi Keith
