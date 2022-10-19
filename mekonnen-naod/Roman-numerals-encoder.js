// create a function that takes a positive integer as a parameter and returning a string
// containing the Roman Numeral representation of that integer
// set a variable(array) for the list of possible Roman numerals for numbers(1-9)
// set a variable(array) for the list of numbers corresponding to the Roman numerals
// set another variable to an empty string(for the roman numeral output)
// use a for loop to iterate through the decimal array
// use a while loop to (while index of decimal is less or equal to number(parameter))
// use assignment operators to assign values to the variables
// 

function solution(number){
  
  var roman = '';
  var decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimalNum.length; i++) {
        while (decimalNum[i] <= number) {
            roman += romanNum[i];
            number -= decimalNum[i];
        }
    }
    return roman;
  }
