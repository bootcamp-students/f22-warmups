/*
set blank array for iterable
check if iterable is an array
if yes continue
if not make it so
function to loop through the array and check for duplicates next to each other
decriment i to check the new value after removal
*/

var uniqueInOrder=function(it){
  
  if (!Array.isArray(it)) {
    it = it.split('');
  } 
  
  for (let i = 1; i < it.length; i++) {    
    if (it[i] == it[i - 1]) {
      i--
      it.splice(i, 1)
     } 
  } return it
}
