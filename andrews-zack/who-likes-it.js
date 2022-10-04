// only 4 possible cases based on what they could give us
// using an if/else statement to concat the indexes onto the string
// annoyingly long but...oh well

function likes(names) {
  if(names.length === 0) {
    return "no one likes this";
  } else if(names.length === 1) {
    return `${names[0]} likes this`;
  } else if(names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if(names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
