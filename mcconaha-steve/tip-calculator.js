/*  FUNCTION calculateTip
    IF rating equals terrible
        THEN tip equals 0%
    ELSE IF rating equals poor
        THEN tip equals 5%
    ELSE IF rating equals good
        THEN tip equals 10%
    ELSE IF rating equals great
        THEN tip equals 15%
    ELSE IF rating equals excellent
        THEN tip equals 20%
    ELSE rating not recognised
    
    tipTotal equals tip times amount rounded up
    
    return tipTotal 
ENDFUNCTION */

function calculateTip(amount, rating) {
  let tip;
  let lowerRating = rating.toLowerCase();
  if (lowerRating == "terrible") {
    tip = 0;  
  } else if (lowerRating  == "poor") {
    tip = 0.05;
  } else if (lowerRating  == "good") {
    tip = 0.1;
  } else if (lowerRating  == "great") {
    tip = 0.15;
  } else if (lowerRating  == "excellent") {
    tip = 0.2
  } else {
    return "Rating not recognised"
  };
  let tipTotal = Math.ceil(tip * amount);
  return tipTotal;
};
//Test
console.log(calculateTip(10, "eXcellent"));  
