function createPhoneNumber(numbers){
  //shifting "(" at beginning of string
  //after three digits push ") "
  //after three digits push "-"
  numbers = numbers.join('');
  let areaCode = numbers.slice(0,3);
  console.log(areaCode);
  let middNum = numbers.slice(3,6);
  console.log(middNum);
  let lastNum = numbers.slice(6,10);
  console.log(lastNum);
  return `(${areaCode}) ${middNum}-${lastNum}`;
}
