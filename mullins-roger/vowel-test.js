// Test incoming string for presence of each vowel
// upper or lower
// read one character at a time
// if vowel is found, note that and move on

function absentVowel(x) {
  let testString = x.toUpperCase();
  let returnIndex = 0;
  let A,E,I,O,U = false;
  
  for (let i=0; i<=testString.length; i++) {
    if (testString[i] == "A") {
      A = true;
    };
    if (testString[i] == "E") {
      E = true;
    };
    if (testString[i] == "I") {
      I = true;
    };
    if (testString[i] == "O") {
      O = true;
    };
    if (testString[i] == "U") {
      U = true;
    };
    if (!A) {
      returnValue = 0;
    };
    };
    
  
    if (!A) {
      returnValue = 0;
    };
    if (!E) {
      returnValue = 1;
    };
    if (!I) {
      returnValue = 2;
    };
    if (!O) {
      returnValue = 3;
    };
    if (!U) {
      returnValue = 4;
    };
    
  console.log(A, E, I, O, U);
  console.log(returnValue);
  
  return returnValue;
  
  };


// function absentVowel(x){
//   let testString = x.toUpperCase();
//   let returnIndex = 0;
//   for (let i=0; i >= testString.length; i++) {
//     if (!(testString[i] === "A")) {
//       returnIndex = 0;
//     };
//     if (!(testString[i] === "E")) {
//       returnIndex = 1;
//     };
//     if (!(testString[i] === "I")) {
//       returnIndex = 2;
//     };
//     if (!(testString[i] === "O")) {
//       returnIndex = 3;
//     };
//     if (!(testString[i] === "U")) {
//       returnIndex = 4;
//     };
//   };
//   return returnIndex;
// };
