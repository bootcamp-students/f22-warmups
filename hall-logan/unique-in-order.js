// 

var uniqueInOrder=function(iterable){
  
  let it = []
  
  if (Array.isArray(iterable)) {
    it = iterable
  }else{
    it = iterable.split('')
  }
  
  function frickThis(it){
   for(let i = 0; i < it.length; i++){
    if ((it[i] === it[i + 1]) || (it[i] == it[i - 1])){
      it.splice(i, 1)
      console.log("console loggin item " + it)
      console.log(it)
    } 
   } return it
}
  frickThis(it)
  frickThis(it)
  return it
  //your code here - remember iterable can be a string or an array
} 
