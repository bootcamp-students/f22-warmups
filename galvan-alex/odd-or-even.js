//add all nums of array
// check to see if sum is divisible by 2
// return odd if it is or even if its not.


function oddOrEven(array) {
  sum = 0;
   for (num of array){
     sum+=num
   }
  return sum%2 == 0 ?  'even' : 'odd';
   
}
