function calculateTip(amount, rating) {
//   convert rating string to lowercase
  let newRating = rating.toLowerCase();
  
  
  
  console.log(amount, newRating);
  
//   change the tip amount based on the rating and return a rounded total.
//   returned 'Rating not recognised if string input is undefined'
  let tip;
  switch (newRating) {
      case "terrible":
      tip = 0;
      return Math.ceil(amount * tip);
      break;
      case "poor":
      tip = .05;
      return Math.ceil(amount * tip);
      break;
      case "good":
      tip = .1;
      return Math.ceil(amount * tip);
      break;
      case "great":
      tip = .15;
      return Math.ceil(amount * tip);
      break;
      case "excellent":
      tip = .2;
      return Math.ceil(amount * tip);
      break;   
      default:
      undefined = 'Rating not recognised';
      return 'Rating not recognised';
  }
  
    console.log(amount, tip, newRating);
    
}
