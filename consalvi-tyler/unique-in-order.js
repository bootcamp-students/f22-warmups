/*
set blank array for iterable
check if iterable is an array
if yes continue
if not make it so
function to loop through the array and check for duplicates next to each other
run function 2x to make sure all bugs are squished
*/

var uniqueInOrder=function(iterable){
  
  let it = []
  
  if (Array.isArray(iterable)) {
    it = iterable
  } else {
    it = iterable.split('');
  } 
  
  function frickThis(it) {
    for (let i = 1; i < it.length; i++) {    
      if ((it[i] == it[i + 1])||(it[i] == it[i - 1])) {
        it.splice(i, 1)
      } 
    } return it
  }
  
  frickThis(it)
  frickThis(it)
  return it
} 
