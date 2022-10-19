function solution(number){
  // convert the number to a roman numeral
  if (number === 0) {
    return '';
  }
//   separate values into each possible increment

  let thisIsSparta = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]
//   loop through the array number and check it first index of each array (number) is less than or equal to the given NUMBER
//   if it is, return 2ND index of given index and concat the output of the function(original number - number of given index)
  
//   if number is not greater, go to the next index of the array and start the process over.
  
  for (let i = 0; i < thisIsSparta.length; i++) {
    if (number >= thisIsSparta[i][0]) {
      return thisIsSparta[i][1] + solution(number - thisIsSparta[i][0]);
    }
  }
  }
