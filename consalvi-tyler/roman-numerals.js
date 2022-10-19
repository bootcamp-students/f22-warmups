function solution(number){
  //initialize a numerals string
  let numerals = ''
  //create object with key value pairs for each value
  let RN = {  
    M:  1000,
    CM: 900, //stupid edge case
    D:  500,
    CD: 400,
    C:  100,
    XC: 90, //stupid edge case
    L:  50,
    XL: 40,
    X:  10,
    IX: 9, //stupid edge case
    V:  5,
    IV: 4,
    I:  1,
  }
  //loop through key value pairs
  for (key in RN) {
    //set variable for number/value
    const numeralCounter = Math.floor(number / RN[key]);
    //if numeralCounter is not 0, move on to the next one
    if (numeralCounter !== 0) {
      numerals += key.repeat(numeralCounter)
    }
    //set number equal to number remainder from value
    number %= RN[key];
    //if number reaches 0 we DUN
    if (number == 0) {
      return numerals
    }
  }

  return numerals
}
