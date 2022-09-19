// Input of string for rating, output given tip percentage


function calculateTip(amount, rating) {
  if (rating === undefined) {
    return "Rating not recognised";
  }
  rating = rating.toLowerCase();
  if (rating === "terrible") {
    return 0;
  } else if (rating === "poor") {
    return Math.ceil(.05 * amount);
  } else if (rating === "good") {
    return Math.ceil(.1 * amount);
  } else if (rating === "great") {
    return Math.ceil(.15 * amount);
  } else if (rating === "excellent") {
    return Math.ceil(.2 * amount);
  } return "Rating not recognised";
}
