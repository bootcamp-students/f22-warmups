// has to go from top left to bottom right
// "I" has to be I\n for it to go to the next line
// when the last item is I it ends the stairs
// when n = 1 has to return. just I
// use a for loop to add integers up to the value of "n" then print out I once it cant incease anymore
// have stairEnd = "\n" along with an empty string with a space inside (to add the spaces that are in between the breaks)
// use the repeat function to repeat "I + \n" till n = i then just add I

function drawStairs(n) {
  // your code here
  let stairEnd = "I"  
  
  for(let i = 1; i < n; i++){
//     stairEnd.repeat(i)
    stairEnd += "\n" + " ".repeat(i) + 'I'
//   console.log(stairEnd)
    
  } return stairEnd
}
