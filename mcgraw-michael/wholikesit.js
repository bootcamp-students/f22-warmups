// given an array, return each item as a string that states that "{item} likes this"
//  if no items in the array, "no one likes this"
// if just two items "{item} and {item} like this""
//  if 3 ""{item}, {item}, and {item} like this"
//  > 3 ""{item}, {item}, and x others like this" x = array.length minus 2

function likes(names) {
    if (names.length === 0) {
      return 'no one likes this';
      
    } else if (names.length === 1) {
      return `${names[0]} likes this`
    } 
    else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
    } 
      else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }  
        else if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    }
