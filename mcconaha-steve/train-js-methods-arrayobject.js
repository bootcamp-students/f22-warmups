function countGrade(scores){
  //coding here...
  //loop through the array
  //for each value determine if the score falls into which letter grade
  //join array at the end
  //IF score is equal to 100
  //THEN score equals S
  //less than 100 && greater than or equal to 90
  let s = scores.filter(score => score === 100).length;
  let a = scores.filter(score => score < 100 && score >= 90).length;
  let b = scores.filter(score => score < 90 && score >= 80).length;
  let c = scores.filter(score => score < 80 && score >= 60).length;
  let d = scores.filter(score => score < 60 && score >= 0).length;
  let x = scores.filter(score => score === -1).length;
  let letterScore = {S:s, A:a, B:b, C:c, D:d, X:x};
  return (letterScore);
//   console.log('this is s value ' + s); this logs 100 in first example
//   console.log('this is a value ' + a);
//   console.log('this is b value ' + b);
//   console.log('this is c value ' + c); this logs 60, 70 in first example
//   console.log('this is d value ' + d);
//   console.log('this is x value ' + x);
}
