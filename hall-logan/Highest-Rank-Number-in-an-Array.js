// loop through the array 
// sort the array
// if item = item + 1 
//   counter++
//    if count is greater than or equal to count
//        count = secondCount
// else
// count = 0 
// return answers


function highestRank(arr){
//Your Code logic should written here
  arr = arr.sort()
  console.log(arr)
  let secondCount = 0
  let count = 0
  let answer = []
  
  for(let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i + 1]){
      count++
        if(count >= secondCount){
          secondCount = count
          answer.push(arr[i])
        }
        
    } else {
      count = 0
    }
  }
    return answer[(answer.length-1)]
  
}
