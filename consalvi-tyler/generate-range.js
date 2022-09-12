/*
FUNCTION generateRange(MIN, MAX, STEP) {
    create array for variables
    start with MIN
        WHILE MIN < MAX
        MIN + MAX LOOP
        END when === MAX
    push variables to array
    return array

}
*/

function generateRange(min, max, step) {
    let myArray = []
    for (let i = min; i <= max; i += step) {
      let bigMath = i;
      myArray.push(bigMath);
    };
  return myArray
}