function century(year) {
  // if century is 1-100 over
  // round up to the nearest 100
  // divide by 100
  // return integer
  let answer = Math.ceil(year/100);
  return answer;
}
