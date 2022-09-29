// The math for this follows a pattern that is the lenght multiplied by the width minus 1
// If the there is no chocolate bar (n=0, m=0) we need to return 0 and not a negative number

function breakChocolate(n,m) {
  if(n === 0 || m === 0){
  return 0;
  }
  return (n * m)-1;
}
