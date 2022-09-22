// Use Math.floor(year/10)
//
// BEGIN
// SET century = year/10 rounded to int
// SET comparison range for century
// IF year falls in range
// RETURN century + 1
// ELSE
// RETURN century
// END

function century(year) {
  // Finish this :)
  let result = 0;
  let century = Math.floor(year/100);
  let testCase = century*100;
  console.log('Year: ' + year);
  console.log('Century: ' + century);
  console.log('Test Case: ' +testCase);
  console.log('Range: ' + (testCase+1) + "-" + (testCase+100));

  if ((year >= (testCase+1)) && (year <= (testCase+100))) {
      result = century + 1;
      } else {
      result = century;
      };
  console.log(result);
  
  
  return result;
}
