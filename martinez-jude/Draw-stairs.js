function drawStairs(n) {
  
    let test = ' ';
    let iholder = 'I';
    let nholder = '\n';
  
    let answer = iholder;
    let newAnswer = answer + nholder + test;
    let returnAnswer = iholder;
  
  for (let i = 0; i <= n; i++){
    if (i == 0){
      return returnAnswer;
    }
    answer = newAnswer;
    newAnswer = test + answer;

    returnAnswer = answer
    }
  return returnAnswer

}

// func give us the value of n
//make var space string ' '
// make var I string 'I'
// make var newLine string '\n'
// if (n == 1) return I string
// make var of answer
