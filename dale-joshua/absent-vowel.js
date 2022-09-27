function absentVowel(x){
// test for missing
  console.log(x)
  if (!x.includes('a')){
//     console.log('working')
    return 0
  } 
  else if (!x.includes('e')){
    console.log('e')
    return 1
  } 
  else if (!x.includes('i')){
//     console.log('working')
    return 2
  } 
  else if (!x.includes('o')){
//     console.log('working')
    return 3
  } else if (!x.includes('u')){
//     console.log('working')
    return 4
  } else {
    return x
  }
  
//   console.log(x)
}
