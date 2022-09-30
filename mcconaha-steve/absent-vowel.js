function absentVowel(x){
  //create vowelArray
  //loop through voweArray
  //  IF string does not contain vowelArray'i'
  //    THEN return vowelArray index
  vowelString = ['a','e','i','o','u'];
    for (let i = 0; i < vowelString.length; i++) {
      if (!x.includes(vowelString[i])) {
        return i;
      }
    }
  };
