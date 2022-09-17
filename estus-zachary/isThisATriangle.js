// A triangle must have 2 sides added together longer than the other
// Calculate each pairs length
// Compare each side to its counterpart and return true if ALL true

function isTriangle(a,b,c)
{
  let sideAB = a + b;
  let sideBC = b + c;
  let sideAC = a + c;
  if(sideAB > c && sideBC > a && sideAC > b)
    return true;
  else 
   return false;
}
