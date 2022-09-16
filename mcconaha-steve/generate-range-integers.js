/**PSEUDO**
INIT

GET Min
GET Max
GET Step

FUNCTION 
    FOR start value (min), if less than end value (max), increment by step value
END FUNCTION

END PROGRAM
*/

function generateRange(min, max, step) {
    let arr =[]; 
    for (let i = min; i <= max; i = i + step) {
       arr.push(i);
    }; return arr;
};
