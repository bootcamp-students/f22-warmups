function findLongest(str) {
  
    var spl = str.split(" ");
    //create variable that separates string into an array of words
    var longest = 0;
    //define variable as staring point for array index 0
    console.log(longest);
    
    for (let i = 0; i < spl.length; i++) {
    //starting at index 0 of the split string array, for every index with length less than than i, increment i by i
      if (spl[i].length > longest) {
        // if length of index i is greater than the previous loop then longest takes on that value
        longest = spl[i].length;
        // 
      }
    }
      return longest;
  };
  console.log(findLongest);
