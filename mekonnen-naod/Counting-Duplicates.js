// write a function that will return the count of distinct case-insensitive alphabetical charaacters
// and numeric digits that occur more that once in the input string
// the input string can be assumed to contain alphabets(upper and lower) and digits
// set three new variables:two empty arrays and one arr set euqal to [1]
// run a for loop to iterate
// turn the strings into uppercase
// 




function duplicateCount(text){
    let array = []
    let resArr = [1]
    let result = []
    
    text = text.toLowerCase()
    for (let i=0; i<text.length; i++) {
       array.push(text.split('').filter(t => t===text[i]))
    }
    array = array.filter(arr=>arr.length>1)
    array.forEach( arr => {
      if (!resArr.includes(arr)) {
        resArr.push(arr)
      }
    })
    resArr = resArr.sort()  
    
    for (let i=0; i<resArr.length-1; i++) {
      if (resArr[i][0]!==resArr[i+1][0]) {
        result.push(resArr[i])
      }
      
    }
  
    if (result.length===0){
      return 0
    } else {
      return result.length
    }
  
  }

  


