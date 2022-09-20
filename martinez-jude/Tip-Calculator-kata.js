function calculateTip(amount, rating) {
  let test = rating.toLowerCase()
  let tip = 1;
  if (test === 'excellent'){
    tip = Math.ceil(amount*.2)
    return tip
  } else if (test === 'great') {
      tip = Math.ceil(amount*.15)
      return tip
  } else if (test === 'good'){
      tip = Math.ceil(amount*.10)
      return tip
  } else if (test === 'poor'){
      tip = Math.ceil(amount*.05)
      return tip
  } else if (test === 'terrible'){
      return 0
  } else {
    return 'Rating not recognised'
  }
}

// func perimeters [amount] / total cost on bill and [rating] of service (5 different values in string)
// set var test to equal rating and convert string to all lowercase
// set var tip to equal one
// if test is equal to [rating] value 
// set tip value to ( * the [amount] and round the sum up)
// return tip value
// TIP and Rating info:
//Terrible: tip 0%
//Poor: tip 5%
//Good: tip 10%
//Great: tip 15%
//Excellent: tip 20%
//if test is not equal to any rating value return "Rating not recognised"
