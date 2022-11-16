var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    console.log('i am sum '+ sum)
    min = Math.min(sum, min);
    console.log('i am min '+ min)
    ans = Math.max(ans, sum - min);
    console.log('i am ans '+ ans)
  }
  console.log(sum)
  console.log(min)
  console.log(ans)
  return ans;
}
