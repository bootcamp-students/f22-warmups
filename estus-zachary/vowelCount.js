

function getCount(str) {
  let count = 0;
  for(let char of str)
    if(char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'u' || char === 'U' || char === 'o' || char === 'O' || char === 'I' || char === 'i')
      count++;
  return count;
}
