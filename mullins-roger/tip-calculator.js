// Pseudocode
// BEGIN
// CONVERT string to uniform case for comparison
// ASSIGN tip variable to 0
// SWITCH value of tip based on value of rating
// ROUND tip
// RETURN tip
// END


function calculateTip(amount, rating) {
  console.log("test!");
  let normalize = rating.toUpperCase();
  let tip = 0;
  console.log (normalize);
  
  switch(normalize) {
  case "TERRIBLE":
    // code block
    tip = 0;
    break;
  case "POOR":
    // code block
    tip = .05;
    break;
  case "GOOD":
    tip = .1;
    break;
  case "GREAT":
    tip = .15;
    break;
  case "EXCELLENT":
    tip = .2;
    break;
  default:
    return "Rating not recognised";
    // code block

  
  }
  return Math.ceil(tip * amount);
  
  
}
