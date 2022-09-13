function generateRange(min, max, step){
    //answer is an array
    let ans = [];
    //if i is the minimum and greater than or equal to the max, add step until you get to the max
    for (let i=min; i<=max; i += step){
    //add the answer to the array
    ans.push(i);
      }
    //return the array;
    return ans;
    }