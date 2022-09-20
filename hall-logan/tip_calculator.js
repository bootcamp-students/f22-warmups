// CREATE function called calculateTip that accepts two parameters. (int, string)
function calculateTip(amount, rating){
  // IF input not valid RETURN
  if(rating == undefined){
   return 'Rating not recognized';
  }
  // ELSE create an object that contains type of experience as a key and the percentage of tip as value.
  else {
      const tipObj = {
                  'terrible': 0,
                  'poor': .05,
                  'good': .1,
                  'great': .15,
                  'excellent': .2
                  }
    // Make string input all lower case to compare with object key. store into variable
      const lowerRating = rating.toLowerCase();
    // Create variable to hold inputed lowerCased string into object to return the percentage associated with experience
      const tipPercentage = tipObj[lowerRating];
    //multiply amount times created variable store that into variable
      const rawTip = amount * tipPercentage;
    //round up and store in variable
    let roundedTip = Math.ceil(rawTip);
    //if roundedTip is Nan return rating not recognized
    if(isNaN(roundedTip)){
      return 'Rating not recognised';
    } else {
      return roundedTip;
    }
  }
}
