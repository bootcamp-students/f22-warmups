/*
array of names
concat them to a string
SWITCH CASE
CASE 0
    RETURN No one likes this [x]
ELSE IF names < 4
    RETURN {name1} {name2} {name3} like this
ELSE IF 
    RETURN 1st 2 names and (names - 2) others like this
*/

function likes(names) {
    switch (names.length) {
      default:
        return `${names[0]}, ${names[1]} and ${(names.length) - 2} others like this`
        break;
      case 0:
        return 'no one likes this';
        break;
      case 1:
        return `${names[0]} likes this`;
        break;
      case 2:
        return `${names[0]} and ${names[1]} like this`
        break;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
        break;
    }
  }