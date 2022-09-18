//create array to push step too.
//start loop from min value
//stop at max value
//incremement step
//push step to array
//return array
function generateRange(min, max, step){
    let newArray = [];
    for (let i = min; i <= max; i += step) {
      newArray.push(i); 
      }
    
      return newArray;
    }