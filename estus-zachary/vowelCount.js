// Check each character of the string for vowel
// Lower case the string to avoid checking capitals
// increase the count of vowels by 1 when vowel
// return count

function getCount(str) {
  let count = 0;
  str = str.toLowerCase()
  for(let char of str)
    if(char === 'a' || char === 'e' || char === 'u' || char === 'o' || char === 'i')
      count++;
  return count;
}
