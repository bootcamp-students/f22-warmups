var maxSequence = function(arr){
  // ...
    if (arr.length == 0) 
      return 0;
    let max = arr[0];
    for (let i=1; i<arr.length; i++) {
      if (arr[i-1] > 0){
          arr[i] += arr[i-1];
      } 
      max = Math.max(arr[i], max);
    }
    if (max < 0) {
      return 0
    } else {
    return max;
      };
};
