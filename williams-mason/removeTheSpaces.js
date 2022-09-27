function noSpace(x){
    //turn the string into an array by split string method
     let arrayStrings = x.split(' ');
    //whats my array?
      console.log(arrayStrings);
     /*arrayStrings = arrayStrings.sort();
      console.log(arrayStrings);*/
      //remove the spaces in the array by joining the individual parts together
      //delineating with a string that is equal to no space
      arrayStrings = arrayStrings.join('');
      //return arrayStrings
      return arrayStrings;
    }