//split into any dimension nxm
// 1x1 is unbreakable
// invalid should return 0
//return number of breaks

function breakChocolate(n,m) {
  return (n*m) - 1 < 0 ? 0 : (n*m)-1
}
