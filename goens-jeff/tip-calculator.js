// Pseudocode

// START
// CREATE tip variable

function calculateTip(amount, rating) {
  
  let tip = 0;
  rating = rating.toLowerCase ();
  
// CREATE if statements to go through each case
  
  if (rating === "terrible") {
    tip = amount * 0;
  } 
  
  else if (rating === "poor") {
    tip = amount * .05;
  }
  
  else if (rating === "good") {
    tip = amount * .10;
  }
  
  else if (rating === "great") {
    tip = amount * .15;
  }
  
  else if (rating === "excellent") {
    tip = amount * .20;
  }
  
// CREATE else statement to capture any null value 
  
  else  {
    return "Rating not recognized";
  }
  
  tip = Math.ceil(tip);
  return tip;
}

// TEST
  console.log(calculateTip(10, ""));
