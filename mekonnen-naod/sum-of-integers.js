// LET min:the smallest value
// LET max:the largest value
// FUNCTION : sum of all integers b/n a and b (s=n(a+b)/2)


function getSum( a,b ){
  
 let min = Math.min(a,b),
     max = Math.max(a,b)
 return ((max-min + 1) + (max + min))/2
  }
