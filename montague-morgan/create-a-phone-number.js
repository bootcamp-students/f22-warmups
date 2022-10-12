function createPhoneNumber(numbers){
  let first3 = numbers.slice(0,3).join('');
  let next3 = numbers.slice(3,6).join('');
  let last4 = numbers.slice(6).join('');
  
  return '('+first3+') '+next3+'-'+last4
 
  console.log('first',first3)
  console.log('second',next3)
  console.log('last', last4)
}

// split the array into three new arrays, first3, next3, last4
// join the arrays together with no spaces
// then add them together with the right () and -
