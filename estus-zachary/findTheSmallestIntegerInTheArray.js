// Step through the array and compare it to the min value so far
// Set min to the first value in the array for comparison purposes
// return the min
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for(let i of args){
      if(min > i) min = i;
    }
    return min;
  }
}
