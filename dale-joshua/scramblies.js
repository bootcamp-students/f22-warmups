function scramble(str1, str2) {
  let obj = {};
  for (let i of str1) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (let j of str2) {
    if (!obj[j]) {
      return false
    }
    obj[j]--;
  }
 return true;
}
