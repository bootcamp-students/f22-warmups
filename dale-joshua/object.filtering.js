function countGrade(scores){
  const grade = {
    S: scores.filter((e) => e === 100).length,
    A: scores.filter((e) => e < 100 && e >= 90).length,
    B: scores.filter((e) => e < 90 && e >= 80).length,
    C: scores.filter((e) => e < 80 && e >= 60).length,
    D: scores.filter((e) => e < 60 && e >= 0).length,
    X: scores.filter((e) => e < 0).length
    
  }  
  return grade;
}
