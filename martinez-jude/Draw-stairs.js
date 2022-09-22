function drawStairs(n) {
  
    let test = ' ';
    let nholder = '\n';
    let answer = 'I';
    let newAnswer = '';
  for (let i = 0; i <= n; i++){
    if (n == 1 ){
      return answer;
    }
    answer = test.repeat(i) + answer + nholder;
    newAnswer = answer + newAnswer;
    console.log(newAnswer)
  }
  console.log('outside',newAnswer);
  return newAnswer
}

// func give us the value of n
//make var space string ' '
// make var I string 'I'
// make var newLine string '\n'
// if (n == 1) return I string
// make var of answer
