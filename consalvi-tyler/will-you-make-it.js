/*
create variable
milesleft = fuel * mpg
IF milesleft >= distanceToPump return true
ELSE return false
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let milesLeft = fuelLeft * mpg;
    if(milesLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }
}
