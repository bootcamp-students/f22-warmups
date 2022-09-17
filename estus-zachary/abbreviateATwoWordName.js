// Declare string holder and get the first letter.
// Uppercase the first letter.
// Split the given string into two indexes by split
// Get the second word in the string
// Catanate the string together and make uppercase

function abbrevName(name){
    let newName = name[0].toUpperCase() + '.';
    let second = name.split(' ');
    let secName = second[1];
    return newName+secName[0].toUpperCase();
}
