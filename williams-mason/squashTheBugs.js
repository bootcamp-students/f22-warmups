function findLongest(str) {
    //declaring spl as string method split seperated by a space
    const spl = str.split(" ");
    //declare variable longest as 0
    let longest = 0
    //for loop
      //i starts at 0
        //if i is less than the length of the spl array
          //incriment i by 1
    for (let i = 0; i < spl.length; i++) {
      //if
        //if the length of the string in index i of array spl is greater than longest
      if (spl[i].length > longest) {
      //longest = the length previously stated
        longest = spl[i].length;
      }
      }
      return longest;
  }