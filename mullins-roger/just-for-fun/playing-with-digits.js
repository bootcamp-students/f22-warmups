function digPow(n, p){
  
  let accumulator = 0;
  let stringN = n.toString();
  let deconstructedN = [];

  for (let i=0; i<stringN.length; i++) {
    deconstructedN.push(stringN[i]);
  }
  
  for (let i=0; i<deconstructedN.length; i++) {
    accumulator = accumulator + (parseInt(deconstructedN[i])**p);
    p++;
  };
  
  if (n*1 === accumulator) {
    return 1;
  };
  
  if (accumulator % n === 0) {
    return accumulator / n;
  };

  return -1;
}
