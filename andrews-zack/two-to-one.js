function longest(s1, s2) {
  let s3 = s1+s2;
  let arr1 = s3.split("");
  arr1.sort();
  let uniqueLetters = [...new Set(arr1)];
  let s4 = uniqueLetters.join('')
  return s4
}
