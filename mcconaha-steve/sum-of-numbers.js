/*Given two integers a and b, which can be positive or negative, find the sum of all the integers 
between and including them and return it. If the two numbers are equal return a or b. Note a and b not ordered*/

/* PSEUDOCODE
    IF a == b
        THEN sumOfIntegers equals a || b
    ELSE
        GET the lesser of sumOfIntegers of a && b    
*/
function sumOfIntegers(a, b) {
    let min = a < b ? a : b; //let min = Math.min(a, b); good alt
    let max = a > b ? a : b; //let max = Math.max(a, b); good alt
    let output = 0;
    if (a == b) { //Sticking point #1, used strict at first
        output = a; //should I be referencing a and b or min and max here?
    } else {
        for (let i = min; i <= max; i++) {
            output += i;
        }
    } return output;
}; 
