// Find the middle of the length
// Calculate the middle index
// Dividing by the length by 2 and rounding down gets the middle index
// If the string is Odd number places (Having an exact middle) return the character at the mid point
// If the string is Even number (Not having an exact middle) return the characters before the mid point and the mid point 

function getMiddle(s)
{
  let middle = s.length % 2;
  let mid = Math.floor(s.length / 2);
  //console.log('middle = '+middle+' mid: '+mid);
  if(middle === 1)
    return s[mid];
  else if(middle === 0)
    return s[mid-1] + s[mid];
}
