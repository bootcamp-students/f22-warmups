// Given a string and indexes to reverse
// Create a backIndex
// Check if the backIndex is more than the length of the string for undefined purposes
// Step through the string 
// When the step through index is in the reverse segment, use backIndex to "reverse" the string
// Otherwise add the character to the new string as normal

function solve(st,a,b){
  let index = 0;
  let backIndex = b;
  if (backIndex >= st.length)
    backIndex = st.length - 1;
  let str = '';
  for(let char of st){
    if(index >= a && index <= b){
      str += st[backIndex];
      backIndex--;
      index++;
    }
    else{
      str += st[index];
      index++;
      }
  }
  return str;
}
