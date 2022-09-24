// create a function Draw stairs that takes 1 int as a paramter
// print out "I\n" * n 


function drawStairs(n) {
  let stair = 'I';
  for(let i = 1; i < n; i++){
    stair += '\n' + (' ').repeat(i) + 'I';
  }
  return stair;
}
