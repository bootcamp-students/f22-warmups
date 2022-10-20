function countGrade(scores){
  let S = scores.filter(score => score === 100).length;
  let A = scores.filter(score => 100 > score && score >= 90).length;
  let B = scores.filter(score => 90 > score && score >= 80).length;
  let C = scores.filter(score => 80 > score && score >= 60).length;
  let D = scores.filter(score => 60 > score && score >= 0).length;
  let X = scores.filter(score => score === -1).length;
  return {S, A, B, C, D, X}
}
