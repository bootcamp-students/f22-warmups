//combine two strings into one array
//sort array alphabetically
//return new string
function longest(s1, s2) {
  let newString = s1 += s2;
  let arr = newString.split('');
  arr.sort()
  const distinct = [... new Set(arr)];
  let str = distinct.join('');
  return str;
}
