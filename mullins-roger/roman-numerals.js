// Using /:
// number / 1000
// number / 500
// number / 100
// number / 50
// number / 10
// number / 5
// remainder = I's
//
// Special Cases
// 4 IIII => IV
// 9 VIIII => IX
// 40 XXXX => XL
// 90 LXXXX => XC
// 400 CCCC => CD
// 900 DCCCC => CM
//
// Fail Case 1990
// 1990 / 1000 => 1 M
// 990 / 500 => 1 D
// 490 / 100 => 4 C
// 90 / 50 => 1 L
// 40 / 10 => 4 X
// MDCCCCLX

function solution(number){
  // convert the number to a roman numeral
  let returnString = "";
  let convert = number;
  
  console.log("Number in is ", number);
  console.log("There should be:");

  console.log(Math.floor(convert/1000), " M's");
  for (let i=1; i<=(Math.floor(convert/1000)); i++) {
    returnString = returnString.concat("M");
  };
  
  console.log("returnString is: ", returnString);
  convert = convert - (Math.floor(convert/1000)*1000);
  
  console.log(Math.floor(convert/500), " D's");
  for (let i=1; i<=(Math.floor(convert/500)); i++) {
    returnString = returnString.concat("D");
  };
  
  console.log("returnString is: ", returnString);
  convert = convert - (Math.floor(convert/500)*500);
  
  console.log(Math.floor(convert/100), " C's");
  for (let i=1; i<=(Math.floor(convert/100)); i++) {
    returnString = returnString.concat("C");
  };
  
  console.log("returnString is: ", returnString);
  convert = convert - (Math.floor(convert/100)*100);
  
  console.log(Math.floor(convert/50), " L's");
  for (let i=1; i<=(Math.floor(convert/50)); i++) {
    returnString = returnString.concat("L");
  };
  
  console.log("returnString is: ", returnString);
  convert = convert - (Math.floor(convert/50)*50);
  
  console.log(Math.floor(convert/10), " X's");
  for (let i=1; i<=(Math.floor(convert/10)); i++) {
    returnString = returnString.concat("X");
  };
  
  console.log("returnString is: ", returnString);
  convert = convert - (Math.floor(convert/10)*10);
  
  console.log(Math.floor(convert/5), " V's");
    for (let i=1; i<=(Math.floor(convert/5)); i++) {
    returnString = returnString.concat("V");
  };
  
  console.log("returnString is: ", returnString);
  convert = convert - (Math.floor(convert/5)*5);
  
  console.log(convert, " I's");
    for (let i=1; i<=convert; i++) {
    returnString = returnString.concat("I");
  };
  
  console.log("returnString is: ", returnString);
// 4 IIII => IV
// 9 VIIII => IX
// 40 XXXX => XL
// 90 LXXXX => XC
// 400 CCCC => CD
// 900 DCCCC => CM
  
  returnString = returnString.replace("IIII", "IV");
  returnString = returnString.replace("VIIII", "IX");
  returnString = returnString.replace("VIV", "IX");
  returnString = returnString.replace("DCCCC", "CM");
  returnString = returnString.replace("CCCC", "CD");
  returnString = returnString.replace("LXXXX", "XC");
  returnString = returnString.replace("XXXX", "XL");
  
  console.log("Replaced returnString is: ", returnString);
  
  return returnString;
  
//   for (let i=1; i<(convert/1000); i++) {
//     returnString = returnString + "M";
//   };
//   //convert = convert - ()
//   for (let i=1; i<(number/500); i++) {
//     returnString = returnString + "D";
//   }
}
