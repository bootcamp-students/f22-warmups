// don't think about this like real chocolate
// breaks needed will always equal (n * m) - 1
// add a condition to return 0 if there is no chocolate
function breakChocolate(n,m) {
  if (n === 0 || m === 0) {
    return 0;
  } else {
  return ((n*m)-1);
}
}
