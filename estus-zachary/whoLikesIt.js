// If empty string returns a special string
// If 4 or more names Place two names then print number of extra people
// Check the length of the array to see which print statement to use
// 3 names print all three

function likes(names) {
  let len = names.length;
  let extra = len - 2;
  switch (names.length){
      case 0: 
            return 'no one likes this';
      case 1:
            return `${names[0]} likes this`;
      case 2:
            return `${names[0]} and ${names[1]} like this`;
      case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default:
            return `${names[0]}, ${names[1]} and ${extra} others like this`;
  }
}
