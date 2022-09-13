/*
FUNCTION getSum (a,b)
create variables to find if a<b or a>b and place them 
INIT sum
FOR LOOP between MIN and MAX
for each increment of loop add to sum

IF a === b RETURN a
ELSE return sum
*/

function getSum(a, b) {
  let min = Math.min(a, b), max = Math.max(a, b);
  let sum = 0;
  for (let j = min; j <= max; j++) {
  sum += j
  }
  if (a === b) return a;
  else return sum;
}