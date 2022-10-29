function countGrade(scores){
  
  console.log(scores.filter(x=> 80<=x<90));
  
  return {
    S: scores.filter(x=> x == 100).length,
    A: scores.filter(x=> x >= 90 && x < 100).length,
    B: scores.filter(x=> x >= 80 && x < 90).length,
    C: scores.filter(x=> x >= 60 && x < 80).length,
    D: scores.filter(x=> x >= 0 && x < 60).length,
    X: scores.filter(x=> x === -1).length,
  }
  
}
