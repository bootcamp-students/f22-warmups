function countGrade(scores){
  return {
    S: scores.filter(x => { return x === 100} ).length,
    A: scores.filter(x => { return x < 100 && x >= 90} ).length,
    B: scores.filter(x => { return x < 90 && x >= 80} ).length,
    C: scores.filter(x => { return x < 80 && x >= 60}).length,
    D: scores.filter(x => { return x < 60 && x >= 0}).length,
    X: scores.filter(x => { return x < 0}).length
  }
}  
