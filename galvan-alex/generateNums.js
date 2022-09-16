//Create generateRange function that accepts 3 args (min, max, step)
function generateRange(min, max, step){
    //create empty array to be able to append ints into it.
    let arr = [];
    // start a for loop where min is the start, max is the end and step is the iteration size
    for (let i=min; i<=max; i+=step){
      //append number into array
      arr.push(i)
    }
    return arr;
  }