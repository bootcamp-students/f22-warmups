// pseudocode

// use conditional if else to compare array values
// return each array value use template literal
// for array with more 4 or more names, use a name.length - 2 to capture # of names





function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
    console.log(names);
    
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
    console.log(names);
    
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
    console.log(names);
    
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
 
}
