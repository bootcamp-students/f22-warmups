// 


function houseNumbersSum(inputArray) {
  //coding and coding..
  console.log(inputArray)
  let sum = 0
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] !== 0){
      sum += inputArray[i]
      
    } else if (inputArray[i] == 0){
      return sum
    }
    
    
  }
  
}
