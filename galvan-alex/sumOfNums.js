//Create getSum Function that accepts 2 args (a,b)
function getSum(a, b){
    /*
      because the promp states that inputs might not be ordered, 
      we need to check which one is lower
    */
      let min = Math.min(a,b); //returns the lower between both args and puts it into min variable
      let max = Math.max(a,b); //returns the higher arg and stores it into max variable
      
    
      let sum = 0;
      if(min === max){
        return min
      } else {
        //loop thorugh all numbers between min and max
        for (let i=min; i<=max; i++){
          //add each number in the iteration to sum
          sum += i;
        }
      }
      return sum
    }
      
    