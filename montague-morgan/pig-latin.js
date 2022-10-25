// split the array by the spaces
// loop throough the new array of words and split them on each letter
// push the index of 0 for each word to the end of the array and add ay
// delete the index of 0 with pop
// join words then add the words together


function pigIt(str){
  str = str.split(' ')
  let ans= []
  for (let i = 0; i < str.length; i++){
    let word = str[i].split('')
    if((str[i]=== '!')||(str[i]==='?')){
      ans.push(str[i])
      str = str.pop()
    } else {
     word.push(word.shift()+'ay')
      ans.push(word.join(''))
    }
  }
    return ans.join(' ')
  //Code here
}
