// A 4 x 4 will need 15 breaks
// The last piece is unbreakable
// One break creates two pieces
// 2 x 1 needs one break
// N * M - 1 = number of breaks
// IT'S THAT EASY

function breakChocolate(n,m) {
  if(n === 0 || m === 0){
    return 0;
  }
  return (n * m) - 1;
}
