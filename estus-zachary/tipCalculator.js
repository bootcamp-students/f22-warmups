// Check for undefined before lowercasing the given string
// Step through the possible scenerios
// Lower case the string to not worry about those values
// return the tip amount

function calculateTip(amount, rating) {
    if(rating === undefined){
      return "Rating not recognised";
    }
    rating = rating.toLowerCase()
  switch(rating) {
    case "terrible":
      return 0;
      break;
    case 'poor':
      return Math.ceil(amount * .05);
      break;
    case 'good':
        return Math.ceil(amount * .1);
        break;
    case 'great':
        return Math.ceil(amount * .15);
        break;
    case 'excellent':
        return Math.ceil(amount * .2);
        break;
    default:
        return "Rating not recognised";
        break;
  }
}
