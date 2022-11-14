function scramble(str1, str2) {
  
  const obj1 = {};
  
  str1.split('').forEach(c => obj1[c] = (obj1[c] || 0) + 1);
  
  return str2.split('').every(c => obj1[c]--);
  
  }
