// I
//  I
//   I
//
// BEGIN
// LOOP number of stairs
//  BEGIN
//  PRINT I
//  PRINT space

function drawStairs(n) {
  // your code here
  
  let answer = "";
  
  if (n == 1) {
    return "I";
  };
  
  for (let i = 0; i <n; i++) {
    for (let j =1; j <= i; j++) {
      answer = answer + " "};
    if (i == n) {
      answer = answer + "I";
    } else {
    answer = answer + "I\n";
  }};
  console.log(answer);
  answer = answer.slice(0, -1);
  return answer;
  };
  
  
//   let answer = "";
//   for (let i=1; i<=n; i++) {
//     for (let j=1; j<=i; j++) {
//       //console.log(" ");
//       //process.stdout.write(" ");
//       answer = answer + " ";
//       console.log(answer);
//     };
//     console.log("I");
//     answer = answer + "I";
//   }
//   //console.log("I");
//   //answer = answer + "I";
//   return answer;
