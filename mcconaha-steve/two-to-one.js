function longest(s1, s2) {
  // given two strings that only include letters from a to z
  // return new string sorted 
  //loop through the array
  //convert string to array using split method
  s1 = (s1 + s2).split('');
  //this newArray will hold the values I push to it
  let newArr = [];
  //  for each unique index of the array, check that index value against the new array values
  for (let i = 0; i < s1.length; i++) {
  //if the new array doe snot include the index item from s1 array then push those values to new array
    if (!newArr.includes(s1[i])) {
      newArr.push(s1[i]);
    }
  }
  //the output needs to be sorted from a to z
  //the output also needs to be combined into a string once again
  console.log(newArr);
  newArr = newArr.sort().join('');
  return newArr;
};
