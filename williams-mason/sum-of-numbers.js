/*
Given two integers a and b, which can be positive or negative

we need to identify the two intigers given in our parameters
set a variable as the max of the two
set a variable as the min of the two

 If the two numbers are equal return a or b.

 if a is equal to b then return a or b.

 if (a === b) {
    return(a || b)
 }

find the sum of all the integers between and including them

for every interger between a and b
    add it to the last interger

    for(i, i<=max, i++)
    i = min
    {firstMin += secondMin += thirdMIn .. so on until i<=max}
    return value of everything added together

    

 
and return it
 


Note: a and b are not ordered!

*/

function getSum (a, b) {
    let varMin = Math.min(a, b);
    let varMax = Math.max(a, b);

    if (varMin === varMax) {
        return(a || b);
    }
    else {
        do {
            (varMin += (varMin++));
            console.log(varMin);
        }

        while (
            (varMin <= varMax)
        );
    }
}