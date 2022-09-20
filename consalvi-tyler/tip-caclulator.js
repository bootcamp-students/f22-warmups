/*
Set each rating for * appropriate tip
rating.toLowerCase
INIT tip
terrible = 0
poor = 0.05
good = 0.1
great = 0.15
excellent = 0.2
**Rating not recognised**
return (tip * amount)
*/

function calculateTip(amount, rating) {

  rating = rating.toLowerCase();
  let tip = 0;
  
  if (rating === "terrible") {
    tip = 0;
    } else if (rating === "poor") {
    tip = 0.05;
    } else if (rating === "good") {
    tip = 0.1;
    } else if (rating === "great") {
    tip = 0.15;
    } else if (rating === "excellent") {
    tip = 0.2;
    } else {
      return 'Rating not recognised'
    }
    return Math.ceil(tip * amount);
}