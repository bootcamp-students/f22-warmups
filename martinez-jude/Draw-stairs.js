function drawStairs(n) {
    let space = ' ';
    let iString = 'I';
    let nholder = '\n';
    let answer = '';
  for (let i = 1; i <= n; i++){
    if (n > i ){
      answer = answer + iString + nholder + space.repeat(i);   
  } else if (i == n){
    answer = answer + iString;
  }
}
return answer;
}

// func pulls n value
// declare vars
// space empty string with space ' '
// iString with 'I'
// nholder '\n'
// answer ''

// For loop conditions
//let i
// i = 1
//stop if i <= value of n
// add one to i every loop

//IF n > i
// set var answer to = var anwser + iString + nholder + space.repeat(value of for loop i)
// Else IF i == value of n
// set var answer = answer + iString;

//return answer;
