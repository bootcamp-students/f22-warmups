/*
variables a and b
for .. of loop
i = a; i <= b; i++
add all increments to the array
*/

function between(a, b) {
    let arr = 0
    for (let i = 0; i <= b; i++) {
    arr.push(i);
    }
    return arr
}