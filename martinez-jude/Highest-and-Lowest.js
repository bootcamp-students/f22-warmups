function highAndLow(numbers){
 let array1 = numbers.split(' ').map(Number)
  
  let var1 = 0;
  let var2 = 0;
  let max = 0;
  let min = 0;
  
  for(let i = 0; i < array1.length; i++){
    var2 = array1[i]
    if (var1 < var2){
      var1 = var2
    }
    
  }
  
    max = var1
  
    for(let i = 0; i < array1.length; i++){
    var2 = array1[i]
    if (var1 > var2){
      var1 = var2
    }
    
  }
    min = var1
  return `${max} ${min}` 
}

//let maxNum = 0
//let minNum = 0

//for let i = 0; i > array.length; i++
// if maxNum and minNum == 0
//  maxNum = array[i]
// minNum = array[i]+1
// if maxNum > minNum 
//   
