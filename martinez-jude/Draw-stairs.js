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
